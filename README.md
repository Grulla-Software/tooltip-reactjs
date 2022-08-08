[![Video text](https://github.com/Grulla-Software/tooltips-reactjs/blob/main/img/imgHeading.png)](https://drive.google.com/file/d/1lSZfiQhW48dqmJvLJN4C_NilhqvrYMOK/view?usp=sharing)

# tooltips-reactjs 🚀
Tooltips-reactjs is an ideal component to display additional information when the user hovers over another element or component.
This component has been developed so that it is totally modifiable and can be adapted to the needs of the developer, allowing it to meet the requested requirements.
It is a lightweight component and very easy to use.
> This displays additional information to users.

## Installing 🔧
To install the component use the Node Package Manager (npm).
You must open the command console at the root of your project and execute the command:
```
 npm install tooltips-reactjs --save 
```

## Usage 🛠️

Here is an example of how to implement the component:

```jsx
import logo from './logo.svg';
import './App.css';
import TooltipsReactjs  from 'tooltips-reactjs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tooltips Component</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>tooltips-reactjs</h2>
        <div className='container'>
          <TooltipsReactjs 
            text={'Tooltip Top'}
            type={'top'}
            background={'#61DAFB'}
            borderRadius={'2%'}
            color={'#000000'}
          >
            <p>Tooltip Top</p>
          </TooltipsReactjs>

          <TooltipsReactjs 
            text={'Tooltip Bottom'}
            type={'bottom'}
            background={'blue'}
          >
            <p>Tooltip Bottom</p>
          </TooltipsReactjs>
        </div>
        <div className='container'>
          <TooltipsReactjs 
            text={'Tooltip Left'}
            type={'left'}
            background={'red'}
          >
            <p>Tooltip Left</p>
          </TooltipsReactjs>

          <TooltipsReactjs 
            text={'Tooltip Right'}
            type={'right'}
            background={'green'}
          >
            <p>Tooltip Right</p>
          </TooltipsReactjs>
        </div>
      </header>
    </div>
  );
}

export default App;

```
<p align="center">
  <img src="https://github.com/Grulla-Software/tooltips-reactjs/blob/main/img/Video.gif" width ='100%'>
</p>

### Props of styles 📦

Props for component styles are displayed as a table with Name, Type, Default, and Description as headings.

**Required props are marked with `*`.**

| Name             | Type   | Default   | Description                                            |
| ---------------- | ------ | --------- | ------------------------------------------------------ |
| `borderRadius`   |`string`| `50%`     | Indicates the border radius of the avatar component.   |
| `backgroundColor`|`string`| `red`     | Indicates the background color of the avatar component.|
| `fontColor`      |`string`| `white`   | Indicates the text color of the avatar component.      |
| `height`         |`string`| `100px`   | Indicates the height of the avatar component.          |
| `width`          |`string`| `100px`   | Indicates the width of the avatar component.           |
| `fontSize`       |`string`| `xx-large`| Indicates the text size of the avatar component.       |

### Additional usage information 📋

Additional information about using the component pros.

- **borderRadius**: Use this prop for indicate the border radius of the avatar component. This value is indicated as a string and percentage format for example: "10%" or "50%".
- **backgroundColor**: Use this prop for indicate the background color of the avatar component. You can specify this value as a string, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of color ("red").
- **fontColor**: Use this prop for indicate the text color of the avatar component. You can specify this value as a string, in the format RGB hex ("#AA00FF") or RGB decimal ("rgb (71, 98, 176)") or RGB percentage ("rgb (27%, 38%, 69% ) ") or the name of the color ("white").
- **height**: Use this prop for indicate the height of the avatar component. Specify this as a string and in pixel format ("30px") or percentage format ("10%").
- **width**: Use this prop for indicate the width of the avatar component. Specify this as a string and in pixel format ("30px") or percentage format ("10%").
- **fontSize**: Use this prop to indicate the size of the text for the avatar component. Specify this as a string and in pixel format ("20px") or REM format ("1rem") or EM format ("1em") or the name of size("smaller", "medium", "large", " larger", "x-large", "xx-large").

### Props for functionality 📦

Props for component functionality are displayed as a table with Name, Type, Default, and Description as headers.

**Required props are marked with `*`.**

| Name     | Type    | Default | Description                                                       |
| -------- | ------- | ------- | ----------------------------------------------------------------- |
| `src`    | `string`| ` `     | Indicates the URL of image that will display the avatar component.|
| `name`\* | `string`| `😀`   | Indicates the name that the avatar component will display.        |


### Additional usage information 📋

Additional information about using the component pros.

- **src**: Use this prop to indicate the URL of the image that the avatar component will display. This must be indicated as a string.
- **name**: Use this property to indicate the name that the avatar component will display. This must be indicated as a string.

## Authors ✒️

People who helped build the project from its inception

* **Marvin Calvo Acuña** - *Software Development* - [marvinjesus](https://github.com/MarvinJesus)
* **Marvin Calvo Acuña** - *Documentation* - [marvinjesus](https://github.com/MarvinJesus)

## License 📄

This project is licensed under the ISC License - see the file [LICENSE.md](LICENSE.md) for details.
