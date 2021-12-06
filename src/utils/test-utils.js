// see more: https://testing-library.com/docs/example-react-intl/
// test-utils.js
import React from 'react'
import {render as rtlRender} from '@testing-library/react'
import {IntlProvider} from 'react-intl';

import messages_en_us from "../translations/en-us.json";

function render(ui, {locale = 'en-us', ...renderOptions} = {}) {
  function Wrapper({children}) {
    return <IntlProvider locale={locale} messages={messages_en_us}>
      {children}
    </IntlProvider>
  }
  return rtlRender(ui, {wrapper: Wrapper, ...renderOptions})
}

// re-export everything
export * from '@testing-library/react'

// override render method
export {render}
