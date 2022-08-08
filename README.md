[![Video text](https://github.com/Grulla-Software/tooltips-reactjs/blob/main/img/imgHeading.png)](https://drive.google.com/file/d/1lSZfiQhW48dqmJvLJN4C_NilhqvrYMOK/view?usp=sharing)

[<img src="https://i.ytimg.com/vi/Hc79sDi3f0U/maxresdefault.jpg" width="50%">](https://drive.google.com/file/d/1lSZfiQhW48dqmJvLJN4C_NilhqvrYMOK/view?usp=sharing "Now in Android: 55")


# avatar-reactjs 🚀
Avatar-reactjs is an ideal component to display the user's profile image, it's light, elegant and very easy. This component speeds up software development by creating the user profile, as it can be reused over and over again. It is fully customizable so it allows you to meet any requirement.
> This displays the user's profile picture or first and last name initials.

## Installing 🔧
To install the component use the Node Package Manager (npm).
You must open the command console at the root of your project and execute the command:
```
 npm install avatar-reactjs --save 
```

## Usage 🛠️

Here is an example of how to implement the component:

```jsx
import logo from './logo.svg';
import './App.css';
import AvatarReactjs from 'avatar-reactjs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Avatar Component</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>avatar-reactjs</h2>
        <div className="container-avatarReactjs">
          <div className="example-avatarReactjs">
            <AvatarReactjs
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'50px'}
              height={'50px'}
              borderRadius={'5%'}
            />
            <AvatarReactjs
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'5%'}
            />
            <AvatarReactjs
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'5%'}
            />
            <AvatarReactjs
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'5%'}
            />
            <AvatarReactjs
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'100px'}
              height={'100px'}
              borderRadius={'5%'}
            />
            <AvatarReactjs
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'blue'}
              fontColor={'azure'}
              width={'120px'}
              height={'120px'}
              borderRadius={'5%'}
            />
          </div>
          <div className="example-avatarReactjs">
            <AvatarReactjs
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'50px'}
              height={'50px'}
              borderRadius={'10%'}
            />
            <AvatarReactjs
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'70px'}
              height={'70px'}
              borderRadius={'10%'}
            />
            <AvatarReactjs
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'70px'}
              height={'70px'}
              borderRadius={'10%'}
            />
            <AvatarReactjs
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'70px'}
              height={'70px'}
              borderRadius={'10%'}
            />
            <AvatarReactjs
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'100px'}
              height={'100px'}
              borderRadius={'10%'}
            />
            <AvatarReactjs
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'white'}
              fontColor={'blue'}
              width={'120px'}
              height={'120px'}
              borderRadius={'10%'}
            />
          </div>
          <div className="example-avatarReactjs">
            <AvatarReactjs
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'50px'}
              height={'50px'}
              borderRadius={'20%'}
            />
            <AvatarReactjs
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'20%'}
            />
            <AvatarReactjs
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'20%'}
            />
            <AvatarReactjs
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
              borderRadius={'20%'}
            />
            <AvatarReactjs
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'100px'}
              height={'100px'}
              borderRadius={'20%'}
            />
            <AvatarReactjs
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'black'}
              fontColor={'azure'}
              width={'120px'}
              height={'120px'}
              borderRadius={'20%'}
            />
          </div>
          <div className="example-avatarReactjs">
            <AvatarReactjs
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'50px'}
              height={'50px'}
              borderRadius={'30%'}
            />
            <AvatarReactjs
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'70px'}
              height={'70px'}
              borderRadius={'30%'}
            />
            <AvatarReactjs
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'70px'}
              height={'70px'}
              borderRadius={'30%'}
            />
            <AvatarReactjs
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'70px'}
              height={'70px'}
              borderRadius={'30%'}
            />
            <AvatarReactjs
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'100px'}
              height={'100px'}
              borderRadius={'30%'}
            />
            <AvatarReactjs
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'red'}
              fontColor={'black'}
              width={'120px'}
              height={'120px'}
              borderRadius={'30%'}
            />
          </div>
          <div className="example-avatarReactjs">
            <AvatarReactjs
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'50px'}
              height={'50px'}
            />
            <AvatarReactjs
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'100px'}
              height={'100px'}
            />
            <AvatarReactjs
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'120px'}
              height={'120px'}
            />
          </div>
          <div className="example-avatarReactjs">
            <AvatarReactjs
              src={'img/avatar7.jpg'}
              name={'Marvin Calvo'}
              fontSize={'medium'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'50px'}
              height={'50px'}
            />
            <AvatarReactjs
              src={'img/avatar3.jpg'}
              name={'Antonio Luna'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              src={'img/avatar2.jpg'}
              name={'Fabiola Gonzalez'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              src={'img/avatar4.jpg'}
              name={'Bill Gates'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'70px'}
              height={'70px'}
            />
            <AvatarReactjs
              src={'img/avatar5.jpg'}
              name={'Albert Einstein'}
              fontSize={'x-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'100px'}
              height={'100px'}
            />
            <AvatarReactjs
              src={'img/avatar6.jpg'}
              name={'Isaac Newton'}
              fontSize={'xx-large'}
              backgroundColor={'green'}
              fontColor={'azure'}
              width={'120px'}
              height={'120px'}
            />
          </div>
        </div>
      
        <br/>
      </header>
    </div>
  );
}
export default App;

```

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
