import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import CustomInput from "../components/CustomInput";

const Publish = ({ token }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <div className="add-publish">
      <h2>Vends ton article</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file">choisir un fichier</label>
        <input
          id="file"
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
          }}
        />

        {picture && <img src={URL.createObjectURL(picture)} alt="file" />}
        <CustomInput title={"Titre"} state={title} setState={setTitle} />
        <CustomInput
          textarea
          title="Décris ton article"
          state={description}
          setState={setDescription}
        />
        <CustomInput title={"Marque"} state={brand} setState={setBrand} />
        <CustomInput title={"Taille"} state={size} setState={setSize} />
        <CustomInput title={"Couleur"} state={color} setState={setColor} />
        <CustomInput title={"État"} state={condition} setState={setCondition} />
        <CustomInput title={"Lieu"} state={city} setState={setCity} />
        <CustomInput title={"Prix"} state={price} setState={setPrice} />
        <input type="submit" value="Publier l'offre" />
      </form>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
