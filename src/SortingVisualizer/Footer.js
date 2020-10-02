import React from 'react'
import './BodyDesign.css';

function Footer() {
    return (
        <div>
            <footer class="bottom-container">
                <p>Contact us</p>
                <div className="upperFotter">
                    <div className="contact">
                        <p>Name: </p>
                        <p>Email: </p>
                        <p>Mobile No: </p>
                    </div>
                    <div className="contact">
                        <p>Name: </p>
                        <p>Email: </p>
                        <p>Mobile No: </p>
                    </div>

                </div>
                <div class="footer-copyright text-center py-3"><p>© 2020 Copyright, Sorting Algorithm Visualizer, All right reserved.</p></div>
            </footer>
        </div>
    )
}

export default Footer
