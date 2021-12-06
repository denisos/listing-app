import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event';

// We're importing from our own created test-utils and not RTL's
import {render, screen} from '../../utils/test-utils.js'

import ListingCard from './ListingCard';

import mockListings from '../../mocks/mockListings.json';

test('should render ListingCard with mock data which is fave', () => {
  const mockListingFave = mockListings[0];
  const handleFaveClickSpy = jest.fn();
  const { getByAltText } = render(<ListingCard listing={mockListingFave} handleFaveClick={handleFaveClickSpy} />);

  expect(screen.getByRole('heading')).toHaveTextContent('$135,987')
  screen.getAllByAltText(/74434 East Sweet Bottom Br #18393/i);
});

test('should render ListingCard with mock data which is not fave', () => {
  const mockListingNotFave = mockListings[1];
  const handleFaveClickSpy = jest.fn();
  render(<ListingCard listing={mockListingNotFave} handleFaveClick={handleFaveClickSpy} />);

  expect(screen.getByRole('heading')).toHaveTextContent('$2,071,426');
  screen.getAllByAltText(/23 Main Street/i);
});

test('should call handler as expected when Fave is clicked in ListingCard', () => {
  const mockListingNotFave = mockListings[1];
  const handleFaveClickSpy = jest.fn();
  render(<ListingCard listing={mockListingNotFave} handleFaveClick={handleFaveClickSpy} />);

  userEvent.click(screen.getByAltText('favorite icon'));
  expect(handleFaveClickSpy).toHaveBeenCalledWith(mockListingNotFave.mlsId);
});
