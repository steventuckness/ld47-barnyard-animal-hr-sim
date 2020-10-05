export interface Resume {
    resumeId: number;
    experience: Array<{
        date: Date;
        company: string;
        position: string;
        tasks: string[];
    }>;
    education: Array<{
        date: Date;
        school: string;
        tasks: string[];
    }>;
}
