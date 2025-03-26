import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useAuth } from "../../hooks/useAuth";
import { db } from "../../services/firebase";
import { Logo } from "./Logo";
import { Content, Main, Profile } from "./styles";
import avatarPNG from "../../assets/avatar.png";

export function NavBar() {
  const { userEmail } = useAuth();
  const [name, setName] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      try {
        if (!userEmail) return;

        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", userEmail));

        const querySnapshot = await getDocs(q);
        const userData = querySnapshot.docs[0].data();

        setName(userData.name);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
      }
    }

    fetchUserData();
  }, [userEmail]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const defaultImage = avatarPNG;

  return (
    <Main>
      <Content>
        <Logo />
        <label>
          <FiSearch />
          <input type="text" placeholder="Pesquise algo" />
        </label>

        <Profile>
          <div>
            <span>{name || "Usuário"}</span>
            <p>{userEmail}</p>
          </div>

          <label htmlFor="file-input">
            <img src={image || defaultImage} alt="Foto de perfil" />
          </label>
          <input
            id="file-input"
            type="file"
            accept=".jpg,.jpeg,.png"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
        </Profile>
      </Content>
    </Main>
  );
}
