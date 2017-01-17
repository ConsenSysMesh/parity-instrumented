// Copyright 2015, 2016 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import { BASE_URL, decode, encode } from './ethlink';

const TEST_TOKEN = 'token';
const TEST_URL = 'https://parity.io';
const TEST_PREFIX = 'EHQPPSBE5DM78X3GECX2YBVGC5S6JX3S5SMPY';
const TEST_RESULT = `${TEST_PREFIX}.${BASE_URL}`;
const TEST_ENCODED = `${TEST_TOKEN}+${TEST_URL}`;

describe('util/ethlink', () => {
  describe('decode', () => {
    it('decodes into encoded url', () => {
      expect(decode(TEST_PREFIX)).to.equal(TEST_ENCODED);
    });

    it('decodes full into encoded url', () => {
      expect(decode(TEST_RESULT)).to.equal(TEST_ENCODED);
    });
  });

  describe('encode', () => {
    it('encodes a url/token combination', () => {
      expect(encode(TEST_TOKEN, TEST_URL)).to.equal(TEST_RESULT);
    });

    it('changes when token changes', () => {
      expect(encode('test-token-2', TEST_URL)).not.to.equal(TEST_RESULT);
    });

    it('changes when url changes', () => {
      expect(encode(TEST_TOKEN, 'http://other.example.com')).not.to.equal(TEST_RESULT);
    });
  });
});
