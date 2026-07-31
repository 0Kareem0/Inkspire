import Navbar from "../components/Navbar";
import CategoryFilter from "../components/CategoryFilter";
import { articles } from "../data/articles";

export default function Search() {
    return (
        <div className="min-h-screen bg-[#0b0a07]">

            <Navbar active="SEARCH" />

            <main className="mx-auto max-w-[1100px] px-6 pb-24">

                {/* Search */}
                <section className="pt-10">

                    <p className="
            text-[9px]
            tracking-[0.25em]
            text-[#746548]
          ">
                        SEARCH THE ARCHIVE
                    </p>

                    <div className="
            mt-8
            border-b
            border-[#635422]
          ">
                        <input
                            type="text"
                            placeholder="Search by title, author, or subject..."
                            className="
                w-full
                bg-transparent
                pb-4
                font-editorial
                text-[24px]
                text-[#dcd1b9]
                outline-none
                placeholder:text-[#3f392c]
              "
                        />
                    </div>

                    <div className="mt-7">
                        <CategoryFilter />
                    </div>
                </section>

                {/* Results */}
                <section className="mt-8">

                    <p className="
            mb-4
            text-[9px]
            tracking-[0.25em]
            text-[#746548]
          ">
                        NOTABLE WORKS
                    </p>

                    {articles.map((article, index) => (
                        <div
                            key={article.id}
                            className="
                grid
                grid-cols-[35px_1fr]
                border-b
                border-[#292419]
                py-6
              "
                        >

              <span className="
                font-editorial
                text-[28px]
                text-[#51472d]
              ">
                {["I", "II", "III", "IV", "V"][index]}
              </span>

                            <div>

                <span className="
                  inline-block
                  rounded-md
                  border
                  border-[#4e421b]
                  px-3
                  py-1
                  text-[9px]
                  tracking-[0.2em]
                  text-[#9a8230]
                ">
                  {article.category}
                </span>

                                <h2 className="
                  mt-3
                  font-editorial
                  text-[23px]
                  text-[#e6dcc5]
                  transition
                  hover:text-[#c4a33b]
                ">
                                    {article.title}
                                </h2>

                                <p className="
                  mt-1
                  font-editorial
                  text-[12px]
                  italic
                  text-[#766b51]
                ">
                                    {article.author} · {article.date}
                                </p>

                            </div>

                        </div>
                    ))}

                </section>
            </main>
        </div>
    );
}