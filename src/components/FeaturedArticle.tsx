export default function FeaturedArticle({ article }) {
    return (
        <article className="
      group
      relative
      h-[530px]
      overflow-hidden
      rounded-md
      border
      border-[#322b1e]
    ">

            {/* Background image */}
            <img
                src={article.image}
                alt=""
                className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          opacity-60
          transition
          duration-700
          group-hover:scale-[1.02]
        "
            />

            {/* Dark overlay */}
            <div className="
        absolute
        inset-0
        bg-gradient-to-t
        from-[#0b0a07]
        via-[#0b0a07]/65
        to-[#0b0a07]/20
      " />

            {/* Content */}
            <div className="
        absolute
        bottom-0
        left-0
        max-w-[760px]
        p-8
        md:p-12
      ">

                <div className="
          mb-6
          inline-block
          rounded-md
          border
          border-[#66551d]
          px-3
          py-1
        ">
          <span className="text-[9px] tracking-[0.2em] text-[#b09435]">
            {article.category}
          </span>
                </div>

                <h1 className="
          font-editorial
          text-[42px]
          font-medium
          leading-[0.98]
          text-[#eee5d0]
          md:text-[58px]
        ">
                    {article.title}
                </h1>

                <p className="
          mt-5
          max-w-[650px]
          font-editorial
          text-[17px]
          italic
          leading-relaxed
          text-[#9c9175]
        ">
                    {article.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
          <span className="font-editorial text-[14px] italic text-[#988863]">
            {article.author}
          </span>

                    <span className="text-[#514832]">·</span>

                    <span className="font-editorial text-[13px] text-[#817558]">
            {article.date}
          </span>

                    <span className="text-[#514832]">·</span>

                    <span className="text-[10px] text-[#817558]">
            {article.readTime}
          </span>
                </div>
            </div>

            {/* Bookmark */}
            <button className="
        absolute
        bottom-12
        right-10
        text-[#9d8531]
        transition
        hover:text-[#d0ae3c]
      ">
                ♧
            </button>
        </article>
    );
}