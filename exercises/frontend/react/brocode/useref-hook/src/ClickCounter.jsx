import { useRef, useState } from "react";

export default function ClickCounter() {
  const clicksRef = useRef(0);   // UI’ı tetiklemez
  const [visible, setVisible] = useState(0); // UI’da görünen

  const handleClick = () => {
    clicksRef.current += 1;      // re-render yok
    setVisible(v => v + 1);      // UI güncellenir
  };

  return (
    <>
      <p>Görünen sayı (state): {visible}</p>
      <p>(Ref arka planda: {clicksRef.current})</p>
      <button onClick={handleClick}>Artır</button>
    </>
  );
}
