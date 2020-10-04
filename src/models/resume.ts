export interface Resume {
    resumeId: number;
    experience: Array<{
        date: Date;
        company: string;
        position: string;
    }>
    education: any[];
    honors: any[];
};
