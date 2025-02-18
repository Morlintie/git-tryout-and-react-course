import { useState, useEffect } from "react";

export function Main() {
  let [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });
  let [memesData, setMemesData] = useState([]);

  function displayTop(event) {
    let { value, name } = event.currentTarget;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    fetch(" https://api.imgflip.com/get_memes")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMemesData(data.data.memes);
        console.log(data.data.memes);
      });
  }, []);

  function pickRandomImage() {
    let randomImageId = Math.round(Math.random() * 100) - 1;
    let randomImage = memesData[randomImageId];
    console.log(randomImage);
    setMeme((prevMemes) => {
      return (prevMemes = {
        ...prevMemes,
        imageUrl: randomImage.url,
      });
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            onChange={displayTop}
            type="text"
            placeholder="One does not simply"
            name="topText"
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            onChange={displayTop}
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            value={meme.bottomText}
          />
        </label>
        <button onClick={pickRandomImage}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
