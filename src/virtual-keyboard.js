const keyLayout = [
  [
    { name: 'Backquote', value: '`', upperCaseValue: '~' },
    { name: 'Digit1', value: '1', upperCaseValue: '!' },
    { name: 'Digit2', value: '2', upperCaseValue: '@' },
    { name: 'Digit3', value: '3', upperCaseValue: '#' },
    { name: 'Digit4', value: '4', upperCaseValue: '$' },
    { name: 'Digit5', value: '5', upperCaseValue: '%' },
    { name: 'Digit6', value: '6', upperCaseValue: ':' },
    { name: 'Digit7', value: '7', upperCaseValue: '?' },
    { name: 'Digit8', value: '8', upperCaseValue: '*' },
    { name: 'Digit9', value: '9', upperCaseValue: '(' },
    { name: 'Digit0', value: '0', upperCaseValue: ')' },
    { name: 'Minus', value: '-', upperCaseValue: '_' },
    { name: 'Equal', value: '=', upperCaseValue: '+' },
    { name: 'Backspace', value: 'Backspace' },
    { name: 'Tab', value: 'Tab' },
    { name: 'KeyQ', value: 'Q' },
    { name: 'KeyW', value: 'W' },
    { name: 'KeyE', value: 'E' },
    { name: 'KeyR', value: 'R' },
    { name: 'KeyT', value: 'T' },
    { name: 'KeyY', value: 'Y' },
    { name: 'KeyU', value: 'U' },
    { name: 'KeyI', value: 'I' },
    { name: 'KeyO', value: 'O' },
    { name: 'KeyP', value: 'P' },
    { name: 'BracketLeft', value: '[' },
    { name: 'BracketRight', value: ']' },
    { name: 'Backslash', value: '\\' },
    { name: 'Delete', value: 'DEL' },
    { name: 'CapsLock', value: 'Caps Lock' },
    { name: 'KeyA', value: 'A' },
    { name: 'KeyS', value: 'S' },
    { name: 'KeyD', value: 'D' },
    { name: 'KeyF', value: 'F' },
    { name: 'KeyG', value: 'G' },
    { name: 'KeyH', value: 'H' },
    { name: 'KeyJ', value: 'J' },
    { name: 'KeyK', value: 'K' },
    { name: 'KeyL', value: 'L' },
    { name: 'Semicolon', value: ';' },
    { name: 'Quote', value: '\'' },
    { name: 'Enter', value: 'ENTER' },
    { name: 'ShiftLeft', value: 'Shift' },
    { name: 'Backslash', value: '\\' },
    { name: 'KeyZ', value: 'Z' },
    { name: 'KeyX', value: 'X' },
    { name: 'KeyC', value: 'C' },
    { name: 'KeyV', value: 'V' },
    { name: 'KeyB', value: 'B' },
    { name: 'KeyN', value: 'N' },
    { name: 'KeyM', value: 'M' },
    { name: 'Period', value: '.' },
    { name: 'Comma', value: ',' },
    { name: 'Slash', value: '/' },
    { name: 'ArrowUp', value: '▲' },
    { name: 'ShiftRight', value: 'Shift' },
    { name: 'ControlLeft', value: 'Ctrl' },
    { name: 'MetaLeft', value: 'Win' },
    { name: 'AltLeft', value: 'Alt' },
    { name: 'Space', value: '' },
    { name: 'AltRight ', value: 'Alt' },
    { name: 'ControlRight', value: 'Ctrl' },
    { name: 'ArrowLeft', value: '◄' },
    { name: 'ArrowDown ', value: '▼' },
    { name: 'ArrowRight ', value: '►' },
  ],

  [
    { name: 'Backquote', value: '\'', upperCaseValue: '₴' },
    { name: 'Digit1', value: '1', upperCaseValue: '!' },
    { name: 'Digit2', value: '2', upperCaseValue: '\'' },
    { name: 'Digit3', value: '3', upperCaseValue: '№' },
    { name: 'Digit4', value: '4', upperCaseValue: ';' },
    { name: 'Digit5', value: '5', upperCaseValue: '%' },
    { name: 'Digit6', value: '6', upperCaseValue: ':' },
    { name: 'Digit7', value: '7', upperCaseValue: '?' },
    { name: 'Digit8', value: '8', upperCaseValue: '*' },
    { name: 'Digit9', value: '9', upperCaseValue: '(' },
    { name: 'Digit0', value: '0', upperCaseValue: ')' },
    { name: 'Minus', value: '-', upperCaseValue: '_' },
    { name: 'Equal', value: '=', upperCaseValue: '+' },
    { name: 'Backspace', value: 'Backspace' },
    { name: 'Tab', value: 'Tab' },
    { name: 'KeyQ', value: 'Й' },
    { name: 'KeyW', value: 'Ц' },
    { name: 'KeyE', value: 'У' },
    { name: 'KeyR', value: 'К' },
    { name: 'KeyT', value: 'Е' },
    { name: 'KeyY', value: 'Н' },
    { name: 'KeyU', value: 'Г' },
    { name: 'KeyI', value: 'Ш' },
    { name: 'KeyO', value: 'Щ' },
    { name: 'KeyP', value: 'З' },
    { name: 'BracketLeft', value: 'Х' },
    { name: 'BracketRight', value: 'Ї' },
    { name: 'Backslash', value: '\\' },
    { name: 'Delete', value: 'DEL' },
    { name: 'CapsLock', value: 'Caps Lock' },
    { name: 'KeyA', value: 'Ф' },
    { name: 'KeyS', value: 'І' },
    { name: 'KeyD', value: 'В' },
    { name: 'KeyF', value: 'А' },
    { name: 'KeyG', value: 'П' },
    { name: 'KeyH', value: 'Р' },
    { name: 'KeyJ', value: 'О' },
    { name: 'KeyK', value: 'Л' },
    { name: 'KeyL', value: 'Д' },
    { name: 'Semicolon', value: 'Ж' },
    { name: 'Quote', value: 'Є' },
    { name: 'Enter', value: 'ENTER' },
    { name: 'ShiftLeft', value: 'Shift' },
    { name: 'Backslash', value: '\\' },
    { name: 'KeyZ', value: 'Я' },
    { name: 'KeyX', value: 'Ч' },
    { name: 'KeyC', value: 'С' },
    { name: 'KeyV', value: 'М' },
    { name: 'KeyB', value: 'И' },
    { name: 'KeyN', value: 'Т' },
    { name: 'KeyM', value: 'Ь' },
    { name: 'Period', value: 'Б' },
    { name: 'Comma', value: 'Ю' },
    { name: 'Slash', value: '.' },
    { name: 'ArrowUp', value: '▲' },
    { name: 'ShiftRight', value: 'Shift' },
    { name: 'ControlLeft', value: 'Ctrl' },
    { name: 'MetaLeft', value: 'Win' },
    { name: 'AltLeft', value: 'Alt' },
    { name: 'Space', value: '' },
    { name: 'AltRight', value: 'Alt' },
    { name: 'ControlRight', value: 'Ctrl' },
    { name: 'ArrowLeft', value: '◄' },
    { name: 'ArrowDown ', value: '▼' },
    { name: 'ArrowRight ', value: '►' },
  ],
];

class TextArea {
  constructor() {
    this.txt = document.createElement('textarea');
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
    this.ctrl = false;
    this.alt = false;
    this.container = document.createElement('div');
    this.container.className = 'keyboard';
    this.renderHtml(this.keys[0]);

    this.text.addEventListener('keydown', this.onType.bind(this));
    this.text.addEventListener('keyup', this.stopType.bind(this));
  }

  renderHtml(keyboardKeys) {
    this.keysLayout = document.createElement('div');
    this.keysLayout.setAttribute('id', 'main-keyboard');
    this.keysLayout.className = 'keyboard-keys';
    this.keyboardKeys = keyboardKeys;
    this.keyboardKeys.forEach((element) => {
      const btn = document.createElement('button');
      btn.setAttribute('type', 'button');
      btn.setAttribute('name', element.name);
      if (element.name === 'Backquote') {
        btn.className = 'keyboard-key functional-key operation';
      } else if (element.value.length > 1 || element.name.match(/Arrow/)) {
        btn.className = 'keyboard-key functional-key';
      } else if (element.name.match(/Digit|Minus|Equal/)) {
        btn.className = 'keyboard-key operation';
      } else btn.className = 'keyboard-key';
      switch (element.name) {
        case 'Backquote':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit1':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit2':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit3':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit4':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit5':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit6':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit7':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit8':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit9':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Digit0':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Minus':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        case 'Equal':
          btn.innerHTML = `${element.value} <span class='punctuation'>${element.upperCaseValue}</span>`;
          break;
        default:
          btn.innerHTML = element.value;
      }
      this.keysLayout.append(btn);
    });

    if (this.container.firstElementChild) {
      const firstEl = document.getElementById('main-keyboard');
      this.container.replaceChild(this.keysLayout, firstEl);
    } else {
      this.container.append(this.keysLayout);
    }
    document.body.firstElementChild.after(this.container);

    this.keysLayout.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    switch (event.target.name) {
      case 'Backspace':
        this.text.value = this.text.value.substring(
          0,
          this.text.value.length - 1,
        );
        break;
      case 'Tab':
        this.text.value += '    ';
        break;
      case 'Delete':
        this.text.value = this.text.value.substring(1);
        break;
      case 'CapsLock':
        this.capslock = !this.capslock;
        break;
      case 'Enter':
        this.text.value += '\r';
        break;
      case 'Space':
        this.text.value += ' ';
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'ArrowDown':
      case 'ArrowRight':
        this.text.value += event.target.textContent;
        break;
      case 'MetaLeft':
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.shift = !this.shift;
        break;
      case 'AltLeft':
        if (this.ctrl) {
          this.alt = false;
        } else this.alt = true;
        break;
      case 'AltRight':
        if (this.ctrl) {
          this.alt = false;
        } else this.alt = true;
        break;
      case 'ControlLeft':
        if (this.alt) {
          this.renderHtml(this.keys[1]);
          this.ctrl = true;
        } else {
          this.renderHtml(this.keys[0]);
          this.ctrl = false;
        }
        break;
      case 'ControlRight':
        if (this.alt) {
          this.renderHtml(this.keys[1]);
          this.ctrl = true;
        } else {
          this.renderHtml(this.keys[0]);
          this.ctrl = false;
        }
        break;
      default:
        if (
          +event.target.childNodes[0].textContent
          || event.target.childNodes[0].textContent.match(/`/)
        ) {
          this.text.value = this.shift
            ? this.text.value + event.target.childNodes[1].textContent
            : this.text.value + event.target.childNodes[0].textContent;
        } else if (
          event.target.childNodes[0].textContent.match(
            /[A-ZА-ЯІЇЄ`;:',.-_=+/\\▼►]+/g,
          )
        ) {
          this.text.value = this.capslock || this.shift
            ? this.text.value
                + event.target.childNodes[0].textContent.toUpperCase()
            : this.text.value
                + event.target.childNodes[0].textContent.toLowerCase();
        }
    }
  }

  onType(event) {
    const buttons = document.getElementsByClassName('keyboard-key');
    Array.from(buttons).forEach((el) => {
      const element = el;
      if (event.code !== element.name) return;
      element.style.background = '#5571ee';
    });
  }

  stopType(event) {
    const buttons = document.getElementsByClassName('keyboard-key');
    Array.from(buttons).forEach((el) => {
      const element = el;
      if (event.code !== element.name) return;
      if (element.classList.contains('functional-key')) {
        element.style.background = '#1c232e';
      } else element.style.background = '#3a424e';
    });
  }
}

const textarea = new TextArea();
const keyboard = new Keyboard(keyLayout);
