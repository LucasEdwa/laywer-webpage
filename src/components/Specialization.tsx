import { useState } from 'react';
import familyIMG from '../images/family.avif';
import socialIMG from '../images/family.avif'; // Add the correct image path
import migrationIMG from '../images/family.avif'; // Add the correct image path

type SectionKey = 'family' | 'social' | 'migration';

interface Section {
    title: string;
    description: string;
    image: string;
}

const sections: Record<SectionKey, Section> = {
    family: {
        title: 'Familjerätt',
        description: 'Vi hjälper dig med frågor som rör äktenskap, samboförhållanden, vårdnad, umgänge, underhåll och bodelning.',
        image: familyIMG,
    },
    social: {
        title: 'Socialrätt',
        description: 'Vi företräder dig i tvister med socialtjänsten och andra myndigheter.',
        image: socialIMG,
    },
    migration: {
        title: 'Migrationsrätt',
        description: 'Vi hjälper dig med frågor som rör uppehållstillstånd, medborgarskap och familjeåterförening.',
        image: migrationIMG,
    },
};

export default function Specialization() {
    const [selectedSection, setSelectedSection] = useState<SectionKey>('family');

    return (
        <div>
            <article className="w-full">
                <div className="text-center flex flex-col gap-7 p-7">
                    <h1 className="text-4xl">Specialistområden</h1>
                    <p className="text-xl">Vi erbjuder juridisk rådgivning inom familjerätt, socialrätt och migrationsrätt.</p>
                </div>
                <ul className="flex gap-4 text-center justify-center p-4 text-sm">
                    {Object.keys(sections).map((key) => (
                        <li key={key}>
                            <button
                                className={`text-black text-xs ${selectedSection === key ? 'text-gray-500' : ''}`}
                                onClick={() => setSelectedSection(key as SectionKey)}
                            >
                                {sections[key as SectionKey].title}
                            </button>
                        </li>
                    ))}
                </ul>
                <header>
                    {Object.keys(sections).map((key) => (
                        <section
                            key={key}
                            className={`transition-opacity duration-500 ease-in-out ${selectedSection === key ? 'opacity-100' : 'opacity-0'} ${selectedSection === key ? 'block' : 'hidden'} h-screen bg-[url('${sections[key as SectionKey].image}')] bg-cover bg-center`}
                        >
                            <div className="bg-black bg-opacity-70 h-full flex items-center justify-center">
                                <div className="text-white text-center flex flex-col items-center gap-7 p-6">
                                    <h2 className="text-2xl">{sections[key as SectionKey].title}</h2>
                                    <p>{sections[key as SectionKey].description}</p>
                                    <a className="px-8 py-3 border w-1/4">LÄS MER</a>
                                    {sections[key as SectionKey].image && (
                                        <div className="flex gap-4 justify-center p-6">
                                            <img src={sections[key as SectionKey].image} alt="" className="w-[32rem] h-[38rem] object-cover" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    ))}
                </header>
            </article>
        </div>
    );
}