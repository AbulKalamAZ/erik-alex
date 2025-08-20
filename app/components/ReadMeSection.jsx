"use client";

import Link from "next/link";

export default function ReadMeSection({ isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center z-[99999] flex justify-center items-center py-36 px-24"
      style={{
        backgroundImage: "url('/poster-bg.webp')",
        backgroundPosition: "0 0",
        backgroundSize: "auto",
      }}
    >
      {/* Go Back Button */}
      <div className="absolute top-4 right-4">
        <Link
          href="#"
          className="px-4 py-2 text-white text-4xl font-bold hover:text-black transition"
          onClick={() => setIsOpen(null)}
        >
          Go Back
        </Link>
      </div>

      {/* Centered Image Container */}
      <div
        className="flex flex-col justify-center items-center"
        style={{
          gridColumnGap: "35px",
          gridRowGap: "35px",
          filter: "blur(.4px)",
          backgroundColor: "#e7e3c3",
          border: "0 solid #2a2a2a",
          borderRadius: "10px",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          maxWidth: "960px",
          minHeight: "100%",
          padding: "70px 30px",
          display: "flex",
          position: "relative",
          boxShadow: "17px 16px 18px 20px #0003",
          marginTop: "40%",
        }}
      >
        <div
          className="text-block"
          style={{
            color: "#2c165f",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: "Rullent, sans-serif",
            fontSize: "120px",
            lineHeight: "100%",
            textDecoration: "underline",
            display: "flex",
          }}
        >
          Read Me
        </div>

        <div
          className="text-block-3"
          style={{
            color: "#2c165f",
            fontFamily: "Rullent, sans-serif",
            fontSize: "20px",
            lineHeight: "23px",
          }}
        >
          If you are reading this, I am already dead. Or rich.
          <br />
          <br />
          In the world of fast trades and volatile markets, I was known simply
          as Erik. To most, I was just a cockerel, a common rooster, but beneath
          the feathers and the crow, there was a sharp mind, a relentless
          hunter, and a guardian of the Solana network. My life was a blend of
          chaos and precision, hunting down meme token "jeeters" and ensuring
          the integrity and safety of the network I called home.
          <br />
          <br />
          My journey began on a humble farm, where I quickly realized I was not
          destined to peck at the ground for scraps. The allure of the digital
          frontier called to me. The rise of cryptocurrencies, especially the
          meme tokens, was an uncharted territory teeming with opportunity and
          danger. I embraced this new world with the keen instincts of a hunter
          and the wit of a trader.
          <br />
          <br />I became a legend in the crypto space, known for my uncanny
          ability to predict market movements and my unwavering resolve to take
          down the "jeeters"—those nefarious traders who sought to exploit and
          destabilize the Solana network. My mission was clear: to protect the
          sanctity of our community and to ensure that every degen could trade
          without fear of manipulation.
          <br />
          <br />
          But my greatest challenge, and perhaps my final stand, lay ahead. The
          meme token wars were intensifying, and it became apparent that a new
          beacon of hope was needed. In my twilight hours, I conceived a plan to
          unite the crypto degens from every corner of the globe. I would launch
          my own token—a symbol of our collective strength and resilience.
          <br />
          <br />
          This token, born from the ashes of countless battles, would be more
          than just a digital asset. It would be a rallying cry for all who
          dared to dream and trade in the tumultuous seas of cryptocurrency. It
          would stand as a testament to our defiance, our ingenuity, and our
          unbreakable spirit.
          <br />
          <br />
          As I pen this letter, I am acutely aware that my time is limited. The
          life of Erik has been one of perpetual motion, ever vigilant and ever
          fighting. But if my final act brings together the crypto degens, if it
          lights the fire of unity and purpose within our ranks, then my journey
          will have been worth every crow and every feather shed.
          <br />
          <br />
          So, whether you find this message in the aftermath of my death or
          amidst my newfound wealth, know this: the spirit of Erik endures in
          every trade, in every battle, and in every token that binds us
          together.
          <br />
          <br />
          Stay strong. Trade wisely. And never forget to get rich or die trying.
          <br />
          <br />
          Yours in solidarity,
          <br />
          <br />
          Erik
        </div>
      </div>
    </section>
  );
}
