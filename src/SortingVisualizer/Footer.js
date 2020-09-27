import React from 'react'
import './BodyDesign.css';

function Footer() {
    return (
        <div>
            <footer class="bottom-container">
                <p>Contact us</p>
                <div className="upperFotter">
                    <div className="contact">
                        <p>Name: Akash Kumar Mondol</p>
                        <p>Email: akash.ice.ru@gmail.com</p>
                        <p>Mobile No: 01521-458326</p>
                    </div>
                    <div className="contact">
                        <p>Name: Abdullah Al Mahfuz</p>
                        <p>Email: aamahfuz2@gmail.com</p>
                        <p>Mobile No: 01718-896655</p>
                    </div>

                </div>
                <div class="footer-copyright text-center py-3"><p>© 2020 Copyright, Sorting Algorithm Visualizer, All right reserved. Developed by Akash and Mahfuz.</p></div>
            </footer>
        </div>
    )
}

export default Footer
