import React, { useState, useEffect } from "react";

import axios from "axios";

import formUtily from "../../hook/form";

import "./EditPost.styles.scss";

const EditPost = () => {
  const [valueTitle, setValueTitle] = formUtily("");
  const [valueCategory, setValueCategory] = formUtily("");
  const [valueParagraph, setValueParagraph, resetParagraph] = formUtily("");
  const [File, setFile] = useState(null);
  const [paragraphes, setParagraphes] = useState();

  const [valueCategories, setValueCategories] = useState([]);

  useEffect(() => {
    setParagraphes([]);
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/category");
      setValueCategories(data.data);
    };
    fetchData();
  }, []);

  console.log(valueCategory);

  const savePara = () => {
    paragraphes.push(valueParagraph);
    resetParagraph();
  };

  const onChangeImage = async (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("title", valueTitle);
    formData.append("content", "valueTitle");
    formData.append("category", valueCategory);
    formData.append("post_images[0]post_image", File);

    paragraphes.forEach((para, idx) => {
      formData.append(`post_paragraph[${idx}]p`, para);
    });

    fetch("http://127.0.0.1:8000/api/post/", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="editPost">
      <form onSubmit={handleSubmit} method="post" className="editPost__form">
        <label id="title" htmlFor="title">
          Title
        </label>
        <input id="title" type="text" value={valueTitle} onChange={setValueTitle} />
        <hr />

        <label htmlFor="category">category</label>
        <select id="category" onChange={setValueCategory}>
          <option value="">בחר קטגוריה</option>
          {valueCategories.map((category) => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <hr />

        <textarea value={valueParagraph} onChange={setValueParagraph}></textarea>
        <input type="button" value="Add Paragraph" onClick={savePara} />

        {paragraphes ? paragraphes.map((paragraph) => <p>{paragraph}</p>) : null}

        <label htmlFor="firstImage">First Image</label>
        <input id="firstImage" type="file" onChange={onChangeImage} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default EditPost;
