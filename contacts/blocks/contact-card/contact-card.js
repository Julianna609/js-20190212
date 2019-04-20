import { Block } from '../../../blocks/block';
import template from './contact-card.pug';
/* eslint-disable */
import _ from './contact-card.scss';
/* eslint-enable */

export class ContactCard extends Block {
  get bemName () {
    return 'contact-message-card';
  }
  template (data) {
    return template(data);
  }
}
