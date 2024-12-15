import { SectionKey, sections } from "../models/ISections";

export default function Specializations() {
    return (
        <>
            <section className="w-full">
                <div className="text-center flex flex-col gap-7 p-7">
                    <h1 className="text-4xl font-bold">Specialistområden</h1>
                    <p className="text-xl">Vi erbjuder juridisk rådgivning inom familjerätt, socialrätt och migrationsrätt.</p>
                </div>
                <div className="flex w-full flex-col justify-center gap-10 p-4">
                    {Object.keys(sections).map((key) => {
                        const section = sections[key as SectionKey];
                        return (
                            <div key={key} className=" text-center w-full">
                                <img className="w-full h-[50rem] object-cover" src={section.image} alt={section.title} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{section.title}</div>
                                    <p className="text-gray-700 text-base">{section.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
               <div className="flex justify-center p-8  ">
               <button className="bg-black hover:bg-gray-700 text-white shadow-xl font-bold py-2 px-8 rounded-md ">
                    LÄS MER
                </button>
               </div>
            </section>
        </>
    );
}
