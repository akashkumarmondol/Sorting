import React from 'react';
import './SortingVisualizer.css';
import { getSelectionSortAnimations } from '../SortingAlgorithms/SelectionSort'
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import { getInsertionSortAnimations } from '../SortingAlgorithms/InsertionSort';
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/HeapSort';
import { getQuickSortAnimations } from '../SortingAlgorithms/QuickSort';

import Display from './Display';
import Display2 from './Display2';

const ANIMATION_SPEED_MS = 50;
const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const THIRD_COLOR = 'yellow';
const FORTH_COLOR = 'pink'
const barwidth = 20;
const multiply=1;
var sortOneValue= 1;
var sortTwoValue= 8;
var ForSortOne= " ";
var ForSortTwo= " ";

export default class ComparedSort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            comparedArray: [],
            showSelectedBar: " ",
            showSelectedSpeed: " ",
            barAuto: 40,
            speedAuto: 10,
            barwidthAuto: 30,
            barwidthMargin: 3,
            dynamic_Input_array_number: " ",
            dynamic_Input_array_element: " ",
            One: " ",
            Two: " ",

        };
    }

    SortOne(firstSortId){
        this.changeColor(firstSortId);
        sortOneValue=firstSortId;
    }
    SortTwo(secondSortId){
        this.changeColor(secondSortId);
        sortTwoValue=secondSortId;
        this.startAnimation();
    }
    startAnimation(){
        if(sortOneValue===1)
            this.selectionSort();
        else if(sortOneValue===2)
            this.bubbleSort();
        else if(sortOneValue===3)
            this.insertionSort();
        else if(sortOneValue===4)
            this.mergeSort();
        else if(sortOneValue===5)
            this.heapSort();
        else
            this.quickSort();


        if(sortTwoValue===7)
            this.selectionSortTwo();
        else if(sortTwoValue===8)
            this.bubbleSortTwo();
        else if(sortTwoValue===9)
            this.insertionSortTwo();
        else if(sortTwoValue===10)
            this.mergeSortTwo();
        else if(sortTwoValue===11)
            this.heapSortTwo();
        else 
            this.quickSortTwo();
    }
  
    onChangeHandlerBar = (event) => {
        var selectValue = event.target.value;
        var val = (Math.floor((40 * 30) / selectValue));
        var pixel = (Math.ceil((60 / selectValue)));
        this.setState({ showSelectedBar: selectValue });
        this.setState({ barAuto: selectValue });
        this.setState({ barwidthAuto: val });
        this.setState({ barwidthMargin: pixel });
        console.log("pixel: " + pixel);
        console.log(this.state.barAuto);
    }
    onChangeHandlerSpeed = (event) => {
        var selectValue = event.target.value;
        this.setState({ showSelectedSpeed: selectValue, speedAuto: selectValue });
    }
    onChange_Dynamic_Input_array_number = (event) => {
        var selectValue = event.target.value;
        var pixel = (Math.ceil((60 / selectValue)));
        var val = (Math.floor((30 * 30) / selectValue));
        this.setState({ barAuto: selectValue });
        this.setState({ barwidthAuto: val });
        this.setState({ barwidthMargin: pixel });
        this.setState({ dynamic_Input_array_number: selectValue });
    }
    onChange_Dynamic_Input_array = (event) => {
        var selectValue = event.target.value;
        this.setState({ dynamic_Input_array_element: selectValue });

    }
    Dynamic_array_submit() {

        const array = [];
        var str = document.getElementById("arrayID").value;
        let rem = 0, temp;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === ' ') {
                array.push(rem);
                rem = 0;
            }
            else {
                temp = str[i] - '0';
                rem = rem * 10 + temp;
            }
        }
        array.push(rem);
        const comparedArray=array.slice();
        this.setState({ array });
        this.setState({ comparedArray });
        this.changeColor(13);
        this.executeMethod();
    }
    executeMethod()
    {
        this.setState({One: ForSortOne});
        this.setState({Two: ForSortTwo});
        ForSortTwo=" ";
        ForSortOne=" ";
    }


   /* componentDidMount() {
          this.resetArray();
      }*/
    resetArray() {
        this.changeColor(0);
        const array = [];
        for (let i = 0; i < this.state.barAuto; i++) {
            array.push(randomIntFromInterval(1, 200));
        }
        const comparedArray=array.slice();
        this.setState({ array });
        this.setState({ comparedArray });
        this.executeMethod();

    }

    changeColor(id){
        let allButton = document.querySelectorAll('#sortId > li > button');
        let submitButtonfind=document.getElementById("submitButton");
        if(id == 0)
        {
            for(let i=0;i<allButton.length;i++){
                allButton[i].classList.remove('ButtonColorChange')
            }
            allButton[id].classList.add('ButtonColorChange');
        }
        else if(id==13)
        {
            for(let i=0;i<allButton.length;i++){
                allButton[i].classList.remove('ButtonColorChange')
            }
            submitButtonfind.classList.add('ButtonColorChange');
        }
        else if(id<=6)
        {
            for(let i=0;i<=6;i++){
                allButton[i].classList.remove('ButtonColorChange')
            }
            allButton[id].classList.add('ButtonColorChange');
        }
        else
        {
            for(let i=7;i<=12;i++){
                allButton[i].classList.remove('ButtonColorChange')
            }
            allButton[id].classList.add('ButtonColorChange');
        }
        
    }

    insertionSort() {
        
        const [animations,counter] = getInsertionSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Insertion Sort is "+ counter;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barValue = document.getElementsByClassName('bar-value');
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }
    insertionSortTwo() {
        let id = 9;
        this.changeColor(id);
        
        const [animations,counter] = getInsertionSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Insertion Sort is "+ counter;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar2');
            const barValue = document.getElementsByClassName('bar-value2');
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();
    }


    selectionSort() {
        let id=1;
        this.changeColor(id);
        
        let [animations, array,counter] = getSelectionSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Selection Sort is "+ counter;
        
        let N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            let arrayBars = document.getElementsByClassName('array-bar');
            let barValue = document.getElementsByClassName('bar-value');
            if (i >= animations.length) {
                let barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                let color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }
    selectionSortTwo() {
        let id=7;
        this.changeColor(id);
        
        let [animations, array,counter] = getSelectionSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Selection Sort is "+ counter;
        let N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            let arrayBars = document.getElementsByClassName('array-bar2');
            let barValue = document.getElementsByClassName('bar-value2');
            if (i >= animations.length) {
                let barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                let color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();
    }

    bubbleSort() {
        
        let id= 2;
        this.changeColor(id);
        
        let [animations, array,counter] = getBubbleSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Bubble Sort is "+ counter;
        let N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            let arrayBars = document.getElementsByClassName('array-bar');
            let barValue = document.getElementsByClassName('bar-value');
            if (i >= animations.length) {
                let barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }

    bubbleSortTwo() {
        let id= 8;
        this.changeColor(id);
        
        const [animations, array,counter] = getBubbleSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Bubble Sort is "+ counter;
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            const arrayBars = document.getElementsByClassName('array-bar2');
            const barValue = document.getElementsByClassName('bar-value2');
            if (i >= animations.length) {
                const barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();
    }
    mergeSort() {
        let id = 4;
        this.changeColor(id);
        
        const [animations,counter] = getMergeSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Merge Sort is "+ counter;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barValue = document.getElementsByClassName('bar-value');
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }

    mergeSortTwo() {
        let id = 10;
        this.changeColor(id);
        
        const [animations,counter] = getMergeSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Merge Sort is "+ counter;
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar2');
            const barValue = document.getElementsByClassName('bar-value2');
            if (animations[i][0] == "comp1" || animations[i][0] == "comp2") {
                let color = (animations[i][0] == "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                let [temp, barOneIndex, barTwoIndex] = animations[i];
                let barOneStyle = arrayBars[barOneIndex].style;
                let barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                let [temp, barIndex1, barIndex2] = animations[i];
                let colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                let barStyle1 = arrayBars[barIndex1].style;
                let barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else {
                let [temp, barIndex, newHeight] = animations[i];
                let barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();

    }

    heapSort() {
        let id = 5;
        this.changeColor(id);
        
        const [animations, array,counter] = getHeapSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Heap Sort is "+ counter;
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barValue = document.getElementsByClassName('bar-value');
            if (i >= animations.length) {
                const barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                const barStyle1 = arrayBars[barIndex1].style;
                const barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }
    heapSortTwo() {
        let id = 11;
        this.changeColor(id);
        
        const [animations, array,counter] = getHeapSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Heap Sort is "+ counter;
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            const arrayBars = document.getElementsByClassName('array-bar2');
            const barValue = document.getElementsByClassName('bar-value2');
            if (i >= animations.length) {
                const barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                const barStyle1 = arrayBars[barIndex1].style;
                const barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "Fixed") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const barOneStyle = arrayBars[barIndex1].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = FORTH_COLOR;
                }, i * this.state.speedAuto);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();
    }

    quickSort() {
        let id = 6;
        this.changeColor(id);
        
        const [animations, array,counter] = getQuickSortAnimations(this.state.array);
        ForSortOne= "The Number of Loop count for Quick Sort is "+ counter;
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const barValue = document.getElementsByClassName('bar-value');
            if (i >= animations.length) {
                const barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                const barStyle1 = arrayBars[barIndex1].style;
                const barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "pivot1" || animations[i][0] === "pivot2") {
                const [tempP, barIndexP, barIndexP2] = animations[i];
                const colorbarP = (animations[i][0] === "pivot1") ? SECONDARY_COLOR : FORTH_COLOR;
                const barStyleP = arrayBars[barIndexP].style;
                setTimeout(() => {
                    barStyleP.backgroundColor = colorbarP;
                }, i * this.state.speedAuto);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
    }
    quickSortTwo() {
        let id = 12;
        this.changeColor(id);
        
        const [animations, array,counter] = getQuickSortAnimations(this.state.comparedArray);
        ForSortTwo= "The Number of Loop count for Quick Sort is "+ counter;
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            const arrayBars = document.getElementsByClassName('array-bar2');
            const barValue = document.getElementsByClassName('bar-value2');
            if (i >= animations.length) {
                const barStyleLast = arrayBars[i - animations.length].style;
                setTimeout(() => {
                    barStyleLast.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speedAuto);
                continue;
            }
            if (animations[i][0] === "comp1" || (animations[i][0] === "comp2")) {
                const color = (animations[i][0] === "comp1") ? SECONDARY_COLOR : PRIMARY_COLOR;
                const [temp, barOneIndex, barTwoIndex] = animations[i];
                const barOneStyle = arrayBars[barOneIndex].style
                const barTwoStyle = arrayBars[barTwoIndex].style;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "colorChangedOne" || animations[i][0] === "colorChangedTwo") {
                const [temp, barIndex1, barIndex2] = animations[i];
                const colorbar = (animations[i][0] === "colorChangedOne") ? THIRD_COLOR : PRIMARY_COLOR;
                const barStyle1 = arrayBars[barIndex1].style;
                const barStyle2 = arrayBars[barIndex2].style;
                setTimeout(() => {
                    barStyle1.backgroundColor = colorbar;
                    barStyle2.backgroundColor = colorbar;
                }, i * this.state.speedAuto);
            }
            else if (animations[i][0] === "pivot1" || animations[i][0] === "pivot2") {
                const [tempP, barIndexP, barIndexP2] = animations[i];
                const colorbarP = (animations[i][0] === "pivot1") ? SECONDARY_COLOR : FORTH_COLOR;
                const barStyleP = arrayBars[barIndexP].style;
                setTimeout(() => {
                    barStyleP.backgroundColor = colorbarP;
                }, i * this.state.speedAuto);
            }
            else {
                const [temp, barIndex, newHeight] = animations[i];
                const barStyle = arrayBars[barIndex].style;
                let bar = barValue[barIndex];
                setTimeout(() => {
                    barStyle.height = `${newHeight*multiply}px`;
                    bar.innerHTML = `${newHeight}`;
                }, i * this.state.speedAuto);
            }
        }
        this.executeMethod();
    }


    render() {
        const { array } = this.state;
        return (
            <div>
                <div className="btn-container">
                    <ul id="sortId">
                        <li><button  id="GenerateNewArrayID" onClick={() => this.resetArray()}>Generate New Array</button> </li>
                        
                        <li>
                            <p>Select Animations speed in ms</p>
                            <select onChange={this.onChangeHandlerSpeed} value={this.state.speedAuto}>

                                <option>1</option>
                                <option>10</option>
                                <option>50</option>
                                <option>100</option>
                                <option>500</option>
                                <option>1000</option>
                            </select>
                        </li>
                        <li>
                            <p>Select Array Bar</p>
                            <select onChange={this.onChangeHandlerBar} value={this.state.barAuto}  onClick={() => this.resetArray()} >
                                <option>10</option>
                                <option>20</option>
                                <option>30</option>
                                <option>40</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </li>
                        <li><p>Choose One algorithm</p></li>
                        <li><button id="SelectionID" className="btnSetOne" onClick={this.SortOne.bind(this,1)}>Selection Sort</button></li>
                        <li><button id="BubbleID" className="btnSetOne" onClick={this.SortOne.bind(this,2)}>Bubble Sort</button></li>
                        <li><button id="InsertionID" className="btnSetOne" onClick={this.SortOne.bind(this,3)}>Insertion Sort</button></li>
                        <li><button id="MergeID" className="btnSetOne" onClick={this.SortOne.bind(this,4)}>Merge Sort</button></li>
                        <li><button id="HeapID" className="btnSetOne" onClick={this.SortOne.bind(this,5)}>Heap Sort</button></li>
                        <li><button id="QuickID" className="btnSetOne" onClick={this.SortOne.bind(this,6)}>Quick Sort</button></li>
                    </ul>
                    <ul id="sortId" className="comparedButton">
                        <li><p>Choose Another algorithm</p></li>
                        <li><button id="SelectionID" className="btnSetTwo" onClick={this.SortTwo.bind(this,7)}>Selection Sort</button></li>
                        <li><button id="BubbleID" className="btnSetTwo" onClick={this.SortTwo.bind(this,8)}>Bubble Sort</button></li>
                        <li><button id="InsertionID" className="btnSetTwo" onClick={this.SortTwo.bind(this,9)}>Insertion Sort</button></li>
                        <li><button id="MergeID" className="btnSetTwo" onClick={this.SortTwo.bind(this,10)}>Merge Sort</button></li>
                        <li><button id="HeapID" className="btnSetTwo" onClick={this.SortTwo.bind(this,11)}>Heap Sort</button></li>
                        <li><button id="QuickID" className="btnSetTwo" onClick={this.SortTwo.bind(this,12)}>Quick Sort</button></li>
                    </ul>
                </div>
                <div className="Input-type">
                    <input className="input1" onChange={this.onChange_Dynamic_Input_array_number} type="text" placeholder="Enter number of element: "></input>
                    <input id="arrayID" className="input3" onChange={this.onChange_Dynamic_Input_array} type="text" placeholder="Enter your Array"></input>
                    <button id="submitButton" onClick={() => this.Dynamic_array_submit()} className="input4">submit</button>
                    
                </div>
                <div className="Paragrapgh">
                    <p className="para1">The number of element is&nbsp;:&nbsp; {this.state.dynamic_Input_array_number} &nbsp;</p>
                    <p className="para2">Input Array :&nbsp;&nbsp; {this.state.dynamic_Input_array_element}&nbsp; </p>
                    <p className="NumberOfComparison">{this.state.One}</p>
                </div>
                <div>  
                    <p className="NumberOfComparisonTwo">{this.state.Two}</p>
                </div>

                <div className="array-container">
                    {
                        array.map((value, idx) => (
                            <Display
                                key={idx}
                                color={PRIMARY_COLOR}
                                value={value}
                                height={`${value*multiply}px`}
                                width={`${this.state.barwidthAuto}px`}
                                margin={`${0, this.state.barwidthMargin}px`}
                            />
                        ))

                    }
                </div>
                <div><br/></div>
                <div className="array-container2">
                    {
                        array.map((value, idx) => (
                            <Display2
                                key={idx}
                                color={PRIMARY_COLOR}
                                value={value}
                                height={`${value*multiply}px`}
                                width={`${this.state.barwidthAuto}px`}
                                margin={`${0, this.state.barwidthMargin}px`}
                            />
                        ))

                    }
                </div>
            </div>
        )
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

//Back to the  write position