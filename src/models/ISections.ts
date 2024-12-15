import familyIMG from '../images/family1.jpg';
import socialIMG from '../images/family.avif';
import migrationIMG from '../images/family.avif';

export interface ISection {
    title: string;
    description: string;
    image: string;
}
export type SectionKey = 'family' | 'social' | 'migration';

export const sections: Record<SectionKey, ISection> = {
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