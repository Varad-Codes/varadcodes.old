/* eslint-disable react/no-unescaped-entities */
import { TypeAnimation } from 'react-type-animation';
import Prompt from "./ui/Prompt";

const AboutMe = () => {
    return (
        <>
            <Prompt CMD={"AboutMe"} />
            <p className="cmd-output">
                I'm Varad Sharma, a self-taught Web and Rust developer from India. I'm currently in 9th grade, and I've been programming for about 3 years. I started out with Java, then learned Systems Programming, and finally switched to web development and rust. I also learned Linux from a cyber security course, Then daily driving Arch, and I'm a big fan of anime.
            </p>
            <br />
            <br />
        </>
    );
};

export default AboutMe;
