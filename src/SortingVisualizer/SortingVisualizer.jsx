import React from 'react';
import './SortingVisualizer.css';
import { getSelectionSortAnimations } from '../SortingAlgorithms/SelectionSort'
import { getBubbleSortAnimations } from '../SortingAlgorithms/BubbleSort';
import { getInsertionSortAnimations } from '../SortingAlgorithms/InsertionSort';
import { getMergeSortAnimations } from '../SortingAlgorithms/MergeSort';
import { getHeapSortAnimations } from '../SortingAlgorithms/HeapSort';
import { getQuickSortAnimations } from '../SortingAlgorithms/QuickSort';

import Display from './Display';


const ANIMATION_SPEED_MS = 50;
const NUMBER_OF_ARRAY_BARS = 50;
const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';
const THIRD_COLOR = 'yellow';
const FORTH_COLOR = 'pink'
const barwidth = 20;
const multiply=2;

export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            showSelectedBar: " ",
            showSelectedSpeed: " ",
            barAuto: 30,
            speedAuto: 10,
            barwidthAuto: 30,
            barwidthMargin: 3,
            dynamic_Input_array_number: " ",
            dynamic_Input_array_element: " ",

        };
    }
  
    onChangeHandlerBar = (event) => {
        var selectValue = event.target.value;
        var val = (Math.floor((30 * 30) / selectValue));
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
        this.setState({ array });
    }


    /*  componentDidMount() {
          this.resetArray();
      }*/
    resetArray() {
        this.changeColor(0);
        const array = [];
        for (let i = 0; i < this.state.barAuto; i++) {
            array.push(randomIntFromInterval(1, 200));
        }
        this.setState({ array });

    }

    changeColor(id){
        let allButton = document.querySelectorAll('#sortId > li > button');
        for(let i=0;i<allButton.length;i++){
            allButton[i].classList.remove('ButtonColorChange')
        }

        allButton[id].classList.add('ButtonColorChange');
    }

    insertionSort() {
        let id = 3;
        this.changeColor(id);
        
        const animations = getInsertionSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            //console.log(animations[i]);
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
    selectionSort() {
        let id=1;
        this.changeColor(id);
        
        const [animations, array] = getSelectionSortAnimations(this.state.array);
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
                console.log(animations[i]);
                console.log(temp); console.log(barOneIndex); console.log(barTwoIndex);
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

    bubbleSort() {
        let id= 2;
        this.changeColor(id);
        
        const [animations, array] = getBubbleSortAnimations(this.state.array);
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
    }
    mergeSort() {
        let id = 4;
        this.changeColor(id);
        
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            //console.log(animations[i]);
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
    heapSort() {
        let id = 5;
        this.changeColor(id);
        
        const [animations, array] = getHeapSortAnimations(this.state.array);
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
                console.log(animations[i]);
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

    quickSort() {
        let id = 6;
        this.changeColor(id);
        
        const [animations, array] = getQuickSortAnimations(this.state.array);
        const N = animations.length + array.length;
        for (let i = 0; i < N; i++) {
            //console.log(animations[i]);
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
                // console.log(animations[i]);
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


    render() {
        const { array } = this.state;
        return (
            <div>
                <div className="btn-container">
                    <ul id="sortId">
                        <li><button  id="GenerateNewArrayID" onClick={() => this.resetArray()}>Generate New Array</button> </li>
                        <li><button id="SelectionID" onClick={() => this.selectionSort()}>Selection Sort</button></li>
                        <li><button id="BubbleID" onClick={() => this.bubbleSort()}>Bubble Sort</button></li>
                        <li><button id="InsertionID" onClick={() => this.insertionSort()}>Insertion Sort</button></li>
                        <li><button id="MergeID" onClick={() => this.mergeSort()}>Merge Sort</button></li>
                        <li><button id="HeapID" onClick={() => this.heapSort()}>Heap Sort</button></li>
                        <li><button id="QuickID" onClick={() => this.quickSort()}>Quick Sort</button></li>
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
                    </ul>
                </div>
                <div className="Input-type">
                    <input className="input1" onChange={this.onChange_Dynamic_Input_array_number} type="text" placeholder="Enter number of element: "></input>
                    <input id="arrayID" className="input3" onChange={this.onChange_Dynamic_Input_array} type="text" placeholder="Enter your Array"></input>
                    <button onClick={() => this.Dynamic_array_submit()} className="input4">submit</button>
                </div>
                <div className="Paragrapgh">
                    <p className="para1">The number of element is&nbsp;:&nbsp; {this.state.dynamic_Input_array_number} &nbsp;</p>
                    <p className="para2">Input Array :&nbsp;&nbsp; {this.state.dynamic_Input_array_element}&nbsp; </p>
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
            </div>
        )
    }
}
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}