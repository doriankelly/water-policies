import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { consultation } from "../../api/fetch";
import { useSelector, useDispatch } from "react-redux";
import { setVisited } from "../../store/slice/visited/visitedSlice";

import { setUser } from "../../store/slice/user/userSlice";

export const AddUserForm = () => {
  const [score, setScore] = useState(null);
  const [userP, setUserP] = useState(null);
  const [updateMessage, setUpdateMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //collect current visited pages state
  const { visitedObject } = useSelector((state) => state.visited);

  //manage logout
  const logout = () => {
    const visitedPages = {
      ...visitedObject,
      droughtVisited: false,
      contaminationVisited: false,
      politicsVisited: false,
      score: 0,
    };
    dispatch(setVisited(visitedPages));

    localStorage.clear();
    dispatch(setUser(null));
    navigate("/");
  };
  //capture text inputs with react hook
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  {
    mode: "all";
  }

  //update user information in DB
  const sendUserInfo = async (data) => {
    //send user info to fetch/db
    console.log(data);
    const userId = localStorage.getItem("id").replaceAll('"', "");
    try {
      const url = `https://h2ohback.onrender.com/api/v1/auth/${userId}`;
      const method = "PUT";
      const response = await consultation(url, method, data);

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }
      //display success message for second
      setUpdateMessage("Actualizado con éxito");
      setTimeout(changeMessage, 1000);
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
      //display fail message for second
      setUpdateMessage(error);
      setTimeout(changeMessage, 1000);
    }
  };

  const changeMessage = () => {
    setUpdateMessage("");
  };

  //retrieve user score if exists
  const getScore = async () => {
    try {
      const userId = localStorage.getItem("id").replaceAll('"', "");
      if (userId) {
        const url = `https://h2ohback.onrender.com/api/v1/entries/${userId}`;
        const request = await consultation(url);
        const score = request.data.score;
        if (!isNaN(score)) {
          setScore(score);
        }
      }
      console.log(request);
    } catch (error) {
      console.error(error);
    }
  };

  //score retrieved on load
  useEffect(() => {
    getScore();
  }, []);

  //get user details
  const getUser = async () => {
    try {
      const userId = localStorage.getItem("id").replaceAll('"', "");

      if (userId) {
        const url = `https://h2ohback.onrender.com/api/v1/auth/${userId}`;
        const request = await consultation(url);
        const user = request.user;

        setUserP(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //user details retrieved on load
  useEffect(() => {
    getUser();
  }, []);

  //prefill form with user data
  return (
    <>
      <form
        className="p-5 font-sans"
        onSubmit={handleSubmit((data) => sendUserInfo(data))}
      >
        <label
          className="text-sm ps-2 font-medium tracking-wide"
          htmlFor="username"
        >
          Nombre
        </label>
        <input
          {...register("username", {
            required: "Inserte nombre",
            minLength: {
              value: 2,
              message: "Nombre tiene que tener al menos dos cáracteres",
            },
          })}
          type="text"
          placeholder="Añadir o actualizar nombre"
          defaultValue={userP?.username}
          name="username"
          id="username"
          className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="mb-4 font-thin italic text-emphasis">
          {errors.name?.message}
        </p>
        <label
          className="text-sm ps-2 font-medium tracking-wide"
          htmlFor="userlastname"
        >
          Apellido
        </label>
        <input
          {...register("userlastname", {
            required: "Inserte apellido",
            minLength: {
              value: 2,
              message: "Apellido tiene que tener al menos dos cáracteres",
            },
          })}
          type="text"
          placeholder="Añadir o actualizar apellido"
          defaultValue={userP?.userlastname}
          name="userlastname"
          id="userlastname"
          className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className="mb-4 font-thin italic text-emphasis">
          {errors.surname?.message}
        </p>
        <label
          className="text-sm ps-2 font-medium tracking-wide"
          htmlFor="name"
        >
          Comunidad Autónoma
        </label>
        <select
          {...register("ccaa", { required: "Seleccione provincia" })}
          name="ccaa"
          id="ccaa"
          placeholder={userP?.ccaa}
          className="mt-1 border border-form-border tracking-wide text-sm   px-2 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        >
          <option value="">Comunidad Autónoma</option>
          <option
            selected={userP?.ccaa == "andalucia" && "selected"}
            value="andalucia"
          >
            Andalucía
          </option>
          <option
            selected={userP?.ccaa == "murcia" && "selected"}
            value="murcia"
          >
            Murcia
          </option>
          <option
            selected={userP?.ccaa == "extremadura" && "selected"}
            value="extremadura"
          >
            Extremadura
          </option>
          <option
            selected={userP?.ccaa == "castillaLaManch" && "selected"}
            value="castillaLaManch"
          >
            Castilla La Mancha
          </option>
          <option
            selected={userP?.ccaa == "valencia" && "selected"}
            value="valencia"
          >
            Comunidad Valenciana
          </option>
          <option
            selected={userP?.ccaa == "castillaLeon" && "selected"}
            value="castillaLeon"
          >
            Castilla y León
          </option>
          <option
            selected={userP?.ccaa == "madrid" && "selected"}
            value="madrid"
          >
            Madrid
          </option>
          <option
            selected={userP?.ccaa == "aragon" && "selected"}
            value="aragon"
          >
            Aragón
          </option>
          <option
            selected={userP?.ccaa == "catalunia" && "selected"}
            value="catalunia"
          >
            Cataluña
          </option>
          <option
            selected={userP?.ccaa == "galicia" && "selected"}
            value="galicia"
          >
            Galicia
          </option>
          <option
            selected={userP?.ccaa == "asturias" && "selected"}
            value="asturias"
          >
            Asturias
          </option>
          <option
            selected={userP?.ccaa == "cantabria" && "selected"}
            value="cantabria"
          >
            Cantabria
          </option>
          <option
            selected={userP?.ccaa == "paisVasco" && "selected"}
            value="paisVasco"
          >
            País Vasco
          </option>
          <option
            selected={userP?.ccaa == "laRioja" && "selected"}
            value="laRioja"
          >
            La Rioja
          </option>
          <option
            selected={userP?.ccaa == "navarra" && "selected"}
            value="navarra"
          >
            Navarra
          </option>
          <option
            selected={userP?.ccaa == "baleares" && "selected"}
            value="baleares"
          >
            Islas Baleares
          </option>
          <option
            selected={userP?.ccaa == "canarias" && "selected"}
            value="canarias"
          >
            Islas Canarias
          </option>
          <option selected={userP?.ccaa == "ceuta" && "selected"} value="ceuta">
            Ceuta
          </option>
          <option
            selected={userP?.ccaa == "melilla" && "selected"}
            value="melilla"
          >
            Melilla
          </option>
        </select>
        <p className="mb-4 font-thin italic text-emphasis">
          {errors.ccaa?.message}
        </p>
        {/* <label
          className="text-sm ps-2 font-medium tracking-wide"
          htmlFor="name"
        >
          Ciudad
        </label>
        <input
          {...register("city", {
            required: "Inserte ciudad",
          })}
          type="text"
          placeholder="Ciudad"
          name="city"
          id="city"
          className="mt-1 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
        />
        <p className=" font-thin italic text-emphasis">
          {errors.surname?.message}
        </p> */}
        <div className="mt-4 mb-20">
          <label className="text-sm ps-2 font-medium tracking-wide">
            Nivel de conocimiento:
          </label>
          <p
            type="text"
            placeholder="Aún no se ha obtenido un resultado"
            name="score"
            id="score"
            className="mt-1 pt-2 border border-form-border tracking-wide text-sm  placeholder:text-black px-3 h-10 bg-terciary focus:outline-none focus:border-2 focus:border-solid rounded-md w-full"
          >
            {score !== null
              ? `${score}%`
              : "Aún no se ha obtenido un resultado"}
          </p>
        </div>
        <p className="relative -top-10 text-center text-xs italic">
          {updateMessage}
        </p>
        <input
          className="mb-10 h-10 drop-shadow w-full bg-primary hover:bg-secondary text-white block  text-center m-auto  shadow-lg rounded-2xl"
          type="submit"
          value="Actualizar"
        />
        <button
          className="mb-5 bg-terciary text-emphasis w-full border border-emphasis px-3 h-10 rounded-2xl hover:outline-none hover:border-2 hover:border-solid"
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </form>
    </>
  );
};
