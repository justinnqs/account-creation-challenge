import React from 'react';
import { FlowLayout } from '../../../components/layouts/flow-layout/flow-layout.tsx';
import { Stack } from '../../../components/layouts/stack/stack';
import { Button } from '../../../components/primitives/button/button.tsx';
import { Card } from '../../../components/primitives/card/card.tsx';
import { Input } from '../../../components/primitives/input/input.tsx';
import { GET_PATH } from '../../../routes.tsx';

export function StockRestrictions() {
  return (
    <FlowLayout>
      <Card
        title="Are you restricted from trading any stocks?"
        description="If you are a broker dealer or registered representative of another company, you may be restricted from trading that stock."
      >
        {/*<li>style UI to look like given mock, make sure the typeahead is realtime feeling search</li>*/}
        <Stack className="gap-2">
          <Input label="Stock Symbol" />
          <Button href={GET_PATH.deposit}>Continue</Button>
        </Stack>
      </Card>
    </FlowLayout>
  );
}
