import { useState, useEffect } from "react";
import { useConvoStore } from "../utils/convoHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { startSpeechToText } from "../speech_recognition/speechToText";
import garfield from "../assets/garfield.jpg";
import steve from "../assets/steve.jpg";
import krabs from "../assets/krabs.png";
import yoda from "../assets/yoda.jpg";
import horse from "../assets/horse.jpg";
import finish from "../assets/sfx/finish.mp3";
import { Typewriter } from "react-simple-typewriter";
import { requestNextCareerPathQuestions, submitAnswers } from "../ai/conversationStore";
import { useGameStore } from "../utils/gameStore";
import "./Convo.css";

const finishAudio = new Audio(finish);

export default function Convo() {
  const { convoActive, currentCharacterName, currentPart, currentQuestion, setCurrentQuestion, clearConvo, questions, answers } = useConvoStore();
  const [inputFieldValue, setInputFieldValue] = useState<string>("");
  const [, setAnimationClass] = useState<string>("");

  useEffect(() => {
    if (convoActive) {
      setAnimationClass("flip-in slide-in");
    }
  }, [convoActive]);

  const characterMap: Record<string, string> = {
    Garfield: garfield,
    Steve: steve,
    Krabs: krabs,
    Yoda: yoda,
    Horse: horse,
  };

  const initialCharacterMessages: Record<string, string> = {
    Garfield: "I hate Mondays. <br/><br/><strong>But I can show you how to enjoy them!</strong>",
    Steve: "Hello, my name is Steve. <br/><br/><strong>I'm still looking for my career treasure!</strong>",
    Krabs: "Wahhhhh. <br/><br/><strong>Money money money money!</strong>",
    Yoda: "Do or do not, there is no try. <br/><br/><strong>I can help you find your path.</strong>",
    Horse: "Howdy. <br/><br/><strong>I'm a horse. I can help you find your inner strength.</strong>",
  };

  if (!convoActive) return null;

  const handleNext = () => {
    if (currentQuestion !== 0) {
      answers[`part${currentPart}`][`a${currentQuestion}`] = inputFieldValue;
    }
    if (currentQuestion < 3) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Part successfully completed
      clearConvo(true);
      finishAudio.play();
      submitAnswers({ a1: answers[`part${currentPart}`].a1, a2: answers[`part${currentPart}`].a2, a3: answers[`part${currentPart}`].a3 });
      useGameStore.getState().incrementProgress();
      requestNextCareerPathQuestions();
    }
    setInputFieldValue("");
    //log all the convo store values
    console.log("currentCharacterName: ", currentCharacterName, "currentPart: ", currentPart, "currentQuestion: ", currentQuestion, "questions: ", questions, "answers: ", answers);
  };

  const handleBackdropClick = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (event.type === "keydown" && (event as React.KeyboardEvent).key !== "Escape") {
      return;
    }
    clearConvo(false);
  };

  const handleSTT = () => {
    setInputFieldValue("");
    startSpeechToText().then((transcript) => {
      setInputFieldValue(transcript);
    });
  };

  return (
    <div className={`fixed inset-0 z-[999999999] flex items-center justify-center`}>
      <div className="absolute inset-0 bg-black/50" onClick={handleBackdropClick} onKeyDown={handleBackdropClick} role="button" tabIndex={0} aria-label="Close convo" />
      <div className="relative bg-white rounded-lg p-8 max-w-2xl w-full mx-4 space-y-8 overflow-visible slide-in">
        {/* Character image and name */}
        <div className="flex items-center space-x-4 absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3">
          <img
            src={characterMap[currentCharacterName]}
            alt={currentCharacterName}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg bg-white hover:scale-105 transition-all duration-300"
          />
          <h2 className="text-2xl font-bold text-gray-900 mt-8">{currentCharacterName}</h2>
        </div>

        {/* Convo text */}
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
        {currentQuestion === 0 ? (
          <>
            <p
              className="text-gray-700 whitespace-pre-line mt-24"
              dangerouslySetInnerHTML={{
                __html: initialCharacterMessages[currentCharacterName],
              }}
            />
            <div className="flex justify-end gap-3 pt-4">
              <div className="flex flex-col w-full gap-2">
                {currentQuestion <= 3 && (
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors hover:cursor-pointer"
                  >
                    Start
                  </button>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-gray-700 whitespace-pre-line mt-24">
              <Typewriter
                key={`${currentPart}-${currentQuestion}`}
                words={[questions[`part${currentPart}`][`q${currentQuestion}`]]}
                loop={1}
                cursor
                cursorStyle=""
                typeSpeed={20}
              />
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                id="convo-input"
                onChange={(e) => setInputFieldValue(e.target.value)}
                value={inputFieldValue}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type your response..."
              />
              <button type="button" onClick={handleSTT} className="p-2 px-3 h-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors hover:cursor-pointer">
                <FontAwesomeIcon icon={faMicrophone} />
              </button>
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <div className="flex flex-col w-full gap-2">
                {currentQuestion <= 3 && (
                  <button
                    type="button"
                    onClick={() => handleNext()}
                    className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors hover:cursor-pointer"
                  >
                    {currentQuestion < 3 ? "Next" : "Finish"}
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
