import Navbar from "../components/Navbar";

export default function MyWorks() {
    return (
        <div className="min-h-screen bg-[#0b0a07]">

            <Navbar active="WRITE" />

            <main className="mx-auto max-w-[1100px] px-6 pb-24">

                <section className="
          flex
          items-end
          justify-between
          border-b
          border-[#292419]
          pt-10
          pb-7
        ">

                    <div>

                        <p className="
              text-[9px]
              tracking-[0.25em]
              text-[#746548]
            ">
                            YOUR SCRIPTORIUM
                        </p>

                        <h1 className="
              mt-2
              font-editorial
              text-[35px]
              text-[#e9dfc8]
            ">
                            My Works
                        </h1>

                    </div>

                    <button className="
            rounded-md
            border
            border-[#8d7425]
            bg-[#c6a63c]
            px-5
            py-2.5
            text-[10px]
            tracking-[0.15em]
            text-[#171207]
          ">
                        ✎ &nbsp; COMPOSE
                    </button>

                </section>

                <section>

                    <article className="
            flex
            items-center
            justify-between
            border-b
            border-[#292419]
            py-8
          ">

                        <div>

              <span className="
                rounded-md
                border
                border-[#4e421b]
                px-3
                py-1
                text-[9px]
                tracking-[0.2em]
                text-[#9a8230]
              ">
                LETTERS
              </span>

                            <h2 className="
                mt-4
                font-editorial
                text-[22px]
                text-[#dcca9e]
              ">
                                On Writing Without an Audience
                            </h2>

                            <p className="
                mt-1
                font-editorial
                text-[12px]
                italic
                text-[#6d624c]
              ">
                                XX July MMXXVI
                            </p>

                        </div>

                        <div className="flex gap-5 text-[#75694e]">

                            <button className="hover:text-[#c5a438]">
                                ♢
                            </button>

                            <button className="hover:text-[#c5a438]">
                                ♜
                            </button>

                        </div>

                    </article>

                </section>

            </main>
        </div>
    );
}