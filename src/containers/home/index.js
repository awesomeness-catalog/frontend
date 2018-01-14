import React, { Component } from 'react'

import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Form,
} from 'semantic-ui-react'

const tags = [
  'php',
  'javascript',
  'react',
  'project',
  'article',
  'dropdown',
  'framework',
  'library',
  'website',
].map(tag => ({ key: tag, value: tag, text: tag }))

class HomepageLayout extends Component {

  constructor(...props) {
    super(...props)

    this.defaultSearchTags = [ 'react', 'article' ]

    this.state = {
      disabledSearchBtn : this.defaultSearchTags.length === 0,
      searchTags : this.defaultSearchTags,
    }
  }

  onChangeDropdown = (event, data) => {
    const disabledSearchBtn = data.value.length === 0
    const searchTags = [...data.value]
    this.setState({
      disabledSearchBtn,
      searchTags,
    })
  }

  handleSubmit = () => {
    this.props.goToSearchTags(this.state.searchTags.join(','))
  }

  render() {
    const { disabledSearchBtn } = this.state

    return (
      <div>
        <Segment
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Menu pointing secondary size='large'>
              <Menu.Item as='a' active>Home</Menu.Item>
              <Menu.Item as='a'>About</Menu.Item>
              <Menu.Item position='right'>
                <Button as='a'>Log in</Button>
                <Button as='a' style={{ marginLeft: '0.5em' }}>Sign Up</Button>
              </Menu.Item>
            </Menu>
          </Container>

          <Container text>
            <Header
              as='h1'
              content='Awesomeness Catalog'
              style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '2em' }}
            />
            <Header
              as='h2'
              content='A default point where you find best IT resourses to solve your current problem.'
              style={{ fontSize: '1.7em', fontWeight: 'normal', marginBottom: '1em',  }}
            />

            <Form onSubmit={this.handleSubmit}>
              <Form.Dropdown
                fluid multiple search selection options={tags}
                defaultValue={this.defaultSearchTags}
                onChange={this.onChangeDropdown}
                style={{fontSize: '14px'}}
                placeholder='Select tags describing your search'
              />
              <Form.Button primary disabled={disabledSearchBtn} >
                Find resourses
                <Icon name='right arrow' />
              </Form.Button>
            </Form>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter.count,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  goToSearchTags: tags => push(`/search/tags/${tags}`)
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageLayout)