import React from "react";
import ReactDOM from "react-dom";
import { Button, Heading, Columns, Box, Media, Content, Image, Breadcrumb, Dropdown } from "react-bulma-components/full";

const App = () => {
  return (
    <div>
      <Heading size={1}>Buttons</Heading>
      <Button
        renderAs="a"
        color="danger"
        size="large"
        rounded
        outlined>
        Danger button
      </Button>
      <Button
        renderAs="a"
        color="primary"
        size="large"
        rounded
        outlined>
        Primary button
      </Button>
      <Button
        renderAs="a"
        href="https://alligator.io"
        color="link"
        size="large"
        rounded
        outlined>
        Link button
      </Button>
      <Button color="success">Success button</Button>
      <Button size="large">Large Button</Button>
      <Button size="small">Small Button</Button>

      <Heading size={1}>Grid</Heading>
      <Heading size={3}>size by name</Heading>
      <Columns>
        <Columns.Column size="one-fifth">20%</Columns.Column>
        <Columns.Column>80%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-quarter">25%</Columns.Column>
        <Columns.Column>75%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="one-third">33.333333333%</Columns.Column>
        <Columns.Column>66.666666667%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="half">50%</Columns.Column>
        <Columns.Column>Also 50%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="two-thirds">66.666666667%</Columns.Column>
        <Columns.Column>33.333333333%</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size="three-quarters">75%</Columns.Column>
        <Columns.Column>25%</Columns.Column>
      </Columns>

      <Heading size={3}>size by 12 columns</Heading>

      <Columns>
        <Columns.Column size={1}>One</Columns.Column>
        <Columns.Column>Eleven</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={2}>Two</Columns.Column>
        <Columns.Column>Ten</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={3}>Three</Columns.Column>
        <Columns.Column>Nine</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={4}>Four</Columns.Column>
        <Columns.Column>Eight</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={5}>Five</Columns.Column>
        <Columns.Column>Seven</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={6}>Six</Columns.Column>
        <Columns.Column>Six</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={7}>Seven</Columns.Column>
        <Columns.Column>Five</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={8}>Eight</Columns.Column>
        <Columns.Column>Four</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={9}>Nine</Columns.Column>
        <Columns.Column>Three</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={10}>Ten</Columns.Column>
        <Columns.Column>Two</Columns.Column>
      </Columns>
      <Columns>
        <Columns.Column size={11}>Eleven</Columns.Column>
        <Columns.Column>One</Columns.Column>
      </Columns>

      <Heading size={2}>Box</Heading>
      <Box
        paddingless={false}
        responsive={{
          mobile: {
            display: 'block',
          },
          tablet: {
            display: 'flex',
          },
          desktop: {
            display: 'inline-flex',
            only: true,
          },
          widescreen: {
            display: 'inline-block',
          },
        }}
        hide={{
          tablet: {
            hide: true,
            only: true,
          },
          widescreen: {
            hide: true,
          },
        }}
      >
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image size={64} alt="64x64" src="http://bulma.io/images/placeholders/128x128.png" />
          </Media.Item>
          <Media.Item>
            <Content>
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor
                vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
              </p>
            </Content>
          </Media.Item>
        </Media>
      </Box>

      <Heading size={2}>Breadcrumb</Heading>

      <Box>
        <Breadcrumb
          separator={{ arrow: 'arrow', dot: 'dot', bullet: 'bullet', succeeds: 'succeeds' }}
          items={[
            {
              name: 'Storybook',
              url: '#1',
            },
            {
              name: 'Breadcrumb',
              url: '#2',
            },
            {
              name: 'Breadcrumb Types',
              url: '#3',
              active: true,
            },
          ]}
        />
      </Box>

      <Heading size={2}>Default Dropdown</Heading>
      <Dropdown>
        <Dropdown.Item value="item">Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other">Other Dropdown item</Dropdown.Item>
        <Dropdown.Item value="active">Active Dropdown item</Dropdown.Item>
        <Dropdown.Item value="other 2">Other Dropdown item</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item value="divider">With divider</Dropdown.Item>
      </Dropdown>

    </div>
  )
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));