import { render, screen } from '@testing-library/react';
import React from 'react';

import '@testing-library/jest-dom/extend-expect';

import { Candidate } from '../../models/candidate';
import CandidateImage from './CandidateImage';

describe('<CandidateImage />', () => {
    test('it should mount', () => {
        render(
            <CandidateImage candidate={{ species: 'horse' } as Candidate} />
        );

        const candidateImage = screen.getByTestId('CandidateImage');

        expect(candidateImage).toBeInTheDocument();
    });
});
