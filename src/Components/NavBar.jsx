import React from 'react'
import '../Styles/NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
        <nav>
            <div class="dropdown">
                <button class="dropbtn">ABOUT</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 4</a>
                        <a href="#">Item 5</a>
                        <a href="#">Item 6</a>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">ROOMS & SUITS</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 7</a>
                        <a href="#">Item 8</a>
                        <a href="#">Item 9</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 10</a>
                        <a href="#">Item 11</a>
                        <a href="#">Item 12</a>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">DINING</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 4</a>
                        <a href="#">Item 5</a>
                        <a href="#">Item 6</a>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">EXPERIENCE</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 4</a>
                        <a href="#">Item 5</a>
                        <a href="#">Item 6</a>
                    </div>
                </div>
            </div>

            <div class="dropdown">
                <button class="dropbtn">EVENTS</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 4</a>
                        <a href="#">Item 5</a>
                        <a href="#">Item 6</a>
                    </div>
                </div>
            </div>

            <a href="#">GALLERY</a>
            <a href="#">OFFERS</a>

            <div class="dropdown">
                <button class="dropbtn">MORE</button>
                <div class="dropdown-content">
                    <div>
                        <h3>Title 1</h3>
                        <a href="#">Item 1</a>
                        <a href="#">Item 2</a>
                        <a href="#">Item 3</a>
                    </div>
                    <div>
                        <h3>Title 2</h3>
                        <a href="#">Item 4</a>
                        <a href="#">Item 5</a>
                        <a href="#">Item 6</a>
                    </div>
                </div>
            </div>





        </nav>
        
    </div>
  )
}
