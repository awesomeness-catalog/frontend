import React from 'react'

class SearchTags extends React.Component {

  constructor(...props) {
    super(...props)

    this.state = {
      queryTags : this.props.match.params.tags.split(',')
    }

    console.log(this.state)
  }

  render() {

    const { queryTags } = this.state

    return (
      <div>
        { `Your tag search is: ${queryTags}` }
      </div>
    )
  }

}

export default SearchTags