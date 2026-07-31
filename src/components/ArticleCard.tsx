export default function ArticleCard({ article, showImage = true }) {
    return (
        <article className="group border-b border-[#292419] py-7">

            <div className="flex gap-7">

                {/* Content */}
                <div className="min-w-0 flex-1">

                    {/* Category */}
                    <div className="mb-4 rounded-md border border-[#544717] px-3 py-1">
            <span className="text-[9px] tracking-[0.22em] text-[#9c8432]">
              {article.category}
            </span>
                    </div>

                    {/* Title */}
                    <h2 className="
            font-editorial
            text-[24px]
            font-semibold
            leading-[1.05]
            text-[#e8dfc9]
            transition
            group-hover:text-[#c9a936]
            md:text-[26px]
          ">
                        {article.title}
                    </h2>

                    {/* Description */}
                    <p className="
            mt-3
            max-w-[720px]
            font-editorial
            text-[15px]
            leading-relaxed
            text-[#766d58]
          ">
                        {article.description}
                    </p>

                    {/* Meta */}
                    <div className="mt-4 flex items-center gap-3">
            <span className="font-editorial text-[13px] italic text-[#887b5d]">
              {article.author}
            </span>

                        <span className="text-[#403a2d]">·</span>

                        <span className="font-editorial text-[12px] text-[#766b50]">
              {article.date}
            </span>

                        <span className="text-[#403a2d]">·</span>

                        <span className="text-[10px] text-[#766b50]">
              ◷ {article.readTime}
            </span>
                    </div>
                </div>

                {/* Image */}
                {showImage && (
                    <div className="
            hidden
            h-[125px]
            w-[105px]
            shrink-0
            overflow-hidden
            rounded-md
            border border-[#40371f]
            sm:block
          ">
                        <img
                            src={article.image}
                            alt=""
                            className="
                h-full
                w-full
                object-cover
                grayscale-[15%]
                opacity-80
                transition
                duration-500
                group-hover:scale-105
                group-hover:opacity-100
              "
                        />
                    </div>
                )}

            </div>
        </article>
    );
}