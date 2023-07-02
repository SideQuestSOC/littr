import React from 'react';
import { render, screen } from '@testing-library/react';
import LikeBadge from '../../Pages/CardDisplay/components/LikeButton/LikeBadge';

describe('LikeBadge', () => {
    test('displays the correct like count', () => {
        // Arrange
        const mockCount = 46;

        render(<LikeBadge count={mockCount} />);

        // Asert that the badge dsiplays the corrent count
        expect(screen.getByTestId('like-badge')).toHaveTextContent('46');
    });
});