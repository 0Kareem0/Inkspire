export default function ArticleCard() {
    return (
    <div className="flex pt-4 items-center justify-center ">
      <article className="relative w-250 h-150 overflow-hidden rounded-lg border border-[#5b4a25]">

        {/* Background */}
        <img
          src="card.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b08] via-black/30 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex min-h-[600px] flex-col justify-end p-8 md:p-14">

          <span className="mb-6 w-fit rounded-md border border-[#765d27] px-3 py-1 text-xs tracking-[0.2em] text-[#b99a50]">
            PHILOSOPHY
          </span>

          <h1 className="max-w-3xl font-serif text-4xl leading-tight text-[#eee4cf] md:text-5xl">
            On the Virtue of Slowness in an Age of Acceleration
          </h1>

          <p className="mt-5 max-w-2xl font-serif text-lg italic leading-relaxed text-[#9b8b6b]">
            How the ancient philosophers conceived of time, leisure, and the
            examined life — and what they might counsel us today.
          </p>

          <div className="mt-8 flex items-center gap-5 text-sm italic text-[#9b8b6b]">
            <span>Marcus Aldervane</span>
            <span>·</span>
            <span>XVIII July MMXXVI</span>
            <span>·</span>
            <span>7 min</span>

            <button className="ml-auto text-xl text-[#b99a50]">
              ♡
            </button>
          </div>

        </div>
      </article>
    </div>
    )
}