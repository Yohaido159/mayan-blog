import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import axios from "axios";

import formUtily from "../../hook/form";

import "./EditPost.styles.scss";

const EditPost = () => {
  const user = useSelector((state) => state.users.currentUser);
  const [valueTitle, setValueTitle] = formUtily("");
  const [valueCategory, setValueCategory] = formUtily("");
  const [valueParagraph, setValueParagraph, resetParagraph] = formUtily("");
  const [File, setFile] = useState(null);
  const [paragraphes, setParagraphes] = useState();

  const [valueCategories, setValueCategories] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  useEffect(() => {
    setParagraphes([]);
    const fetchData = async () => {
      const data = await axios.get("http://127.0.0.1:8000/api/category");
      setValueCategories(data.data);
    };
    fetchData();
  }, []);

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

    const token = window.localStorage.getItem("token") || null;

    axios
      .post("http://127.0.0.1:8000/api/post/", formData, { headers: { Authorization: "JWT " + token } })
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setSuccessMessage(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {user ? (
        <div className="editPost">
          <form onSubmit={handleSubmit} method="post" className="editPost__form">
            <label id="title" htmlFor="title">
              Title
            </label>
            <input id="title" type="text" value={valueTitle} onChange={setValueTitle} />
            <hr />

            <label htmlFor="category">category</label>

            <select className="editPost__category" id="category" onChange={setValueCategory}>
              <option value="">בחר קטגוריה</option>
              {valueCategories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>

            <hr />

            <textarea className="editPost__textarea" value={valueParagraph} onChange={setValueParagraph}></textarea>
            <input type="button" value="Add Paragraph" onClick={savePara} />

            {paragraphes ? paragraphes.map((paragraph) => <p className="editPost__p">{paragraph}</p>) : null}

            <label htmlFor="firstImage">First Image</label>
            <input id="firstImage" type="file" onChange={onChangeImage} />
            <button className="btn-edit">Send</button>
          </form>
          {successMessage ? <div className="successMessage">הפוסט נשלח בהצלחה</div> : null}
        </div>
      ) : (
        <h3>C'ant Access</h3>
      )}
    </div>
  );
};

export default EditPost;
