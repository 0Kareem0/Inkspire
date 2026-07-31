export default function SectionHeader({
                                          eyebrow,
                                          title,
                                          button,
                                      }) {
    return (
        <div className="flex items-end justify-between border-b border-[#292419] pb-7">

            <div>
                <p className="
          mb-2
          text-[9px]
          tracking-[0.25em]
          text-[#716346]
        ">
                    {eyebrow}
                </p>

                <h1 className="
          font-editorial
          text-[35px]
          leading-none
          text-[#e9dfc8]
        ">
                    {title}
                </h1>
            </div>

            {button && (
                <button className="
          rounded-md
          border
          border-[#8c7221]
          bg-[#c5a438]
          px-5
          py-2.5
          text-[10px]
          tracking-[0.15em]
          text-[#171207]
          transition
          hover:bg-[#d3b44a]
        ">
                    ✎ &nbsp; {button}
                </button>
            )}
        </div>
    );
}