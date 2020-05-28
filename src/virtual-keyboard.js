"use strict";

const keyLayoutEN = [
  { name: "Backquote", value: "`" },
  { name: "Digit1", value: "1" },
  { name: "Digit2", value: "2" },
  { name: "Digit3", value: "3" },
  { name: "Digit4", value: "4" },
  { name: "Digit5", value: "5" },
  { name: "Digit6", value: "6" },
  { name: "Digit7", value: "7" },
  { name: "Digit8", value: "8" },
  { name: "Digit9", value: "9" },
  { name: "Digit0", value: "0" },
  { name: "Minus", value: "-" },
  { name: "Equal", value: "=" },
  { name: "Backspace", value: "Backspace" },
  { name: "Tab", value: "Tab" },
  { name: "KeyQ", value: "Q" },
  { name: "KeyW", value: "W" },
  { name: "KeyE", value: "E" },
  { name: "KeyR", value: "R" },
  { name: "KeyT", value: "T" },
  { name: "KeyY", value: "Y" },
  { name: "KeyU", value: "U" },
  { name: "KeyI", value: "I" },
  { name: "KeyO", value: "O" },
  { name: "KeyP", value: "P" },
  { name: "BracketLeft", value: "[" },
  { name: "BracketRight", value: "]" },
  { name: "Backslash", value: "\\" },
  { name: "Delete", value: "DEL" },
  { name: "CapsLock", value: "Caps Lock" },
  { name: "KeyA", value: "A" },
  { name: "KeyS", value: "S" },
  { name: "KeyD", value: "D" },
  { name: "KeyF", value: "F" },
  { name: "KeyG", value: "G" },
  { name: "KeyH", value: "H" },
  { name: "KeyJ", value: "J" },
  { name: "KeyK", value: "K" },
  { name: "KeyL", value: "L" },
  { name: "Semicolon", value: ";" },
  { name: "Quote", value: "'" },
  { name: "Enter", value: "ENTER" },
  { name: "ShiftLeft", value: "Shift" },
  { name: "Backslash", value: "\\" },
  { name: "KeyZ", value: "Z" },
  { name: "KeyX", value: "X" },
  { name: "KeyC", value: "C" },
  { name: "KeyV", value: "V" },
  { name: "KeyB", value: "B" },
  { name: "KeyN", value: "N" },
  { name: "KeyM", value: "M" },
  { name: "Period", value: "." },
  { name: "Comma", value: "," },
  { name: "Slash", value: "/" },
  { name: "ArrowUp", value: "▲" },
  { name: "ShiftRight", value: "Shift" },
  { name: "ControlLeft", value: "Ctrl" },
  { name: "MetaLeft", value: "Win" },
  { name: "AltLeft", value: "Alt" },
  { name: "Space", value: "" },
  { name: "AltRight ", value: "Alt" },
  { name: "ControlRight", value: "Ctrl" },
  { name: "ArrowLeft", value: "◄" },
  { name: "ArrowDown ", value: "▼" },
  { name: "ArrowRight ", value: "►" },
];

class TextArea {
  constructor() {
    this.txt = document.createElement("textarea");
    document.body.prepend(this.txt);
    this.txt.focus();
  }
}

class Keyboard {
  constructor(keys) {
    this.keys = keys;
    this.text = document.body.firstElementChild;
    this.capslock = false;
    this.shift = false;
    this.container = document.createElement("div");
    this.container.className = "keyboard";
    this.keysLayout = document.createElement("div");
    this.keysLayout.className = "keyboard-keys";

    this.keysLayout.addEventListener("click", this.onClick.bind(this));
    this.text.addEventListener("keydown", this.onType.bind(this));
    this.text.addEventListener("keyup", this.stopType.bind(this));
  }

  renderHtml() {
    this.keys.forEach((element) => {
      let btn = document.createElement("button");
      btn.setAttribute("type", "button");
      btn.setAttribute("name", element.name);
      btn.className =
        element.name === "Backquote"
          ? "keyboard-key functional-key operation"
          : element.value.length > 1 || element.name.match(/Arrow/)
          ? "keyboard-key functional-key"
          : element.name.match(/Digit|Minus|Equal/)
          ? "keyboard-key operation"
          : "keyboard-key";
      switch (element.name) {
        case "Backquote":
          btn.innerHTML = `${element.value} <span class='punctuation'>~</span>`;
          break;
        case "Digit1":
          btn.innerHTML = `${element.value} <span class='punctuation'>!</span>`;
          break;
        case "Digit2":
          btn.innerHTML = `${element.value} <span class='punctuation'>@</span>`;
          break;
        case "Digit3":
          btn.innerHTML = `${element.value} <span class='punctuation'>#</span>`;
          break;
        case "Digit4":
          btn.innerHTML = `${element.value} <span class='punctuation'>$</span>`;
          break;
        case "Digit5":
          btn.innerHTML = `${element.value} <span class='punctuation'>%</span>`;
          break;
        case "Digit6":
          btn.innerHTML = `${element.value} <span class='punctuation'>:</span>`;
          break;
        case "Digit7":
          btn.innerHTML = `${element.value} <span class='punctuation'>?</span>`;
          break;
        case "Digit8":
          btn.innerHTML = `${element.value} <span class='punctuation'>*</span>`;
          break;
        case "Digit9":
          btn.innerHTML = `${element.value} <span class='punctuation'>(</span>`;
          break;
        case "Digit0":
          btn.innerHTML = `${element.value} <span class='punctuation'>)</span>`;
          break;
        case "Minus":
          btn.innerHTML = `${element.value} <span class='punctuation'>_</span>`;
          break;
        case "Equal":
          btn.innerHTML = `${element.value} <span class='punctuation'>+</span>`;
          break;
        default:
          btn.innerHTML = element.value;
      }
      this.keysLayout.append(btn);
    });
    this.container.append(this.keysLayout);
    document.body.firstElementChild.after(this.container);
  }

  onClick(event) {
    switch (event.target.name) {
      case "Backspace":
        this.text.value = this.text.value.substring(
          0,
          this.text.value.length - 1
        );
        break;
      case "Tab":
        this.text.value += "\t";
        break;
      case "Delete":
        this.text.value = this.text.value.substring(1);
        break;
      case "CapsLock":
        this.capslock = !this.capslock;
        this.text.value = this.text.value;
        break;
      case "Enter":
        this.text.value += "\r";
        break;
      case "Space":
        this.text.value += " ";
        break;
      case "ArrowUp":
      case "ArrowLeft":
      case "ArrowDown":
      case "ArrowRight":
        this.text.value += event.target.textContent;
        break;
      case "MetaLeft":
        break;
      case "ShiftLeft":
      case "ShiftRight":
        this.shift = !this.shift;
        this.text.value = this.text.value;
        break;
      default:
        if (
          event.target.childNodes[0].textContent.match(/[0-9A-Z`;',.-=/\\]+/g)
        ) {
          this.text.value =
            this.capslock || this.shift
              ? this.text.value +
                event.target.childNodes[0].textContent.toUpperCase()
              : this.text.value +
                event.target.childNodes[0].textContent.toLowerCase();
        } 
    }
  }

  onType(event) {
    const buttons = document.getElementsByClassName("keyboard-key");
    Array.from(buttons).forEach((el) => {
      console.log(el.name);
      if (event.code !== el.name) return;
      el.style.background = "#5571ee";
    });
  }

  stopType(event) {
    const buttons = document.getElementsByClassName("keyboard-key");
    Array.from(buttons).forEach((el) => {
      if (event.code !== el.name) return;
      el.classList.contains("functional-key")
        ? (el.style.background = "#1c232e")
        : (el.style.background = "#3a424e");
    });
  }
}

const textarea = new TextArea();
const keyboard = new Keyboard(keyLayoutEN);
keyboard.renderHtml();
