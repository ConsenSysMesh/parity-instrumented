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

import React, { Component, PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';

import { Container } from '~/ui';
import { arrayOrObjectProptype } from '~/util/proptypes';

import Dapp from './dapp';
import styles from '../home.css';

export default class Dapps extends Component {
  static propTypes = {
    history: arrayOrObjectProptype().isRequired,
    store: PropTypes.object.isRequired
  }

  render () {
    return (
      <Container
        title={
          <FormattedMessage
            id='home.dapps.title'
            defaultMessage='Recent Dapps'
          />
        }
      >
        <div className={ styles.dapps }>
          { this.renderHistory() }
        </div>
      </Container>
    );
  }

  renderHistory () {
    const { history, store } = this.props;

    if (!history.length) {
      return (
        <div className={ styles.empty }>
          <FormattedMessage
            id='home.dapps.none'
            defaultMessage='No recent URLs retrieved'
          />
        </div>
      );
    }

    return (
      <table className={ styles.history }>
        <tbody>
          {
            history.map((h) => {
              return (
                <Dapp
                  id={ h.entry }
                  key={ h.timestamp }
                  store={ store }
                  timestamp={ h.timestamp }
                />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}