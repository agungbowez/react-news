// bikin static komponen nya
// panggil via api
// yang mau di tampilkan adalah sumber berita

import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";

const key = "d838ebfd8e814e878e32adb42e8bff8f";
const sources = `https://newsapi.org/v2/top-headlines?country=id&apiKey=${key}`;
const dariSemantic = "https://react.semantic-ui.com";
const iconLocator = "https://icon-locator.herokuapp.com/icon?size=70..120..200";

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data: result.data.articles,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card key={source.id}>
              <Card.Content>
                <Image src={`${iconLocator}&url=${source.url}`} />
                <Card.Description>{source.author}</Card.Description>
                <Card.Description>{source.title}</Card.Description>
                <Card.Description>{source.description}</Card.Description>
                <Card.Description>{source.url}</Card.Description>
                <Card.Description>{source.urlToImage}</Card.Description>
                <Card.Description>{source.publishedAt}</Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}

export default NewsList;
