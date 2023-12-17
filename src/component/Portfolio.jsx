import React from "react";
import "../css/portfolio.css";
import Keeper from "../assets/Keeper-App.png";
import Todo from "../assets/Todo-App.png";
import Calculator from "../assets/Calculator.png";
import Chatt from "../assets/Chatting App.png";
import netflix from "../assets/Netflix-Clone-App.png";
import ticTacToe from "../assets/tic-tac-toe.png";
const Portfolio = () => {
  return (
    <>
      <section id="portfolio">
        <h1 class="section-heading mb75px">
          <span>
            <i class="fas fa-th-list"></i>
          </span>
          <span> Projects </span>
        </h1>
        <div id="portfolio-container">
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/KeeperNotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Keeper} alt="Keeper_App" />
              <div class="portfolio-details">
                <p>
                  Developed a React-based Keeper App for seamless note creation
                  and organization.
                </p>
              </div>
            </a>
          </div>
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/ToDoList"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Todo} alt="Todo_App" />
              <div class="portfolio-details">
                <p>
                  Developed a React-based ToDo App to enhance task management
                  and productivity.
                </p>
              </div>
            </a>
          </div>
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/react_calculator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Calculator} alt="Calculator_App" />
              <div class="portfolio-details">
                <p>
                  Created a React-based Calculator App. to learn basic react
                </p>
              </div>
            </a>
          </div>
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/my-chat-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Chatt} alt="Chatt_App" />
              <div class="portfolio-details">
                <p>
                  Created a Chatting application using Node.js with socket.io{" "}
                </p>
              </div>
            </a>
          </div>
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/NETFLIX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={netflix} alt="NetFlix_App" />
              <div class="portfolio-details">
                <p>
                  {" "}
                  Created a NetFlix Clone App to learn Fundamental of web
                  development{" "}
                </p>
              </div>
            </a>
          </div>
          <div class="portfolio-image-container">
            <a
              href="https://github.com/interviewByte/Tic-Tac-Toe-Game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={ticTacToe} alt="TicTacToe_Game" />
              <div class="portfolio-details">
                <p>
                  Created a React-based Tac Tac Toe game using state in React.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
