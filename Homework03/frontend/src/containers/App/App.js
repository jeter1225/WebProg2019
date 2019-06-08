import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import {
  POSTS_QUERY,
  USERS_QUERY,
  CREATE_POST_MUTATION,
  POSTS_SUBSCRIPTION
} from "../../graphql";
import Post from "../../components/Post/Post";
import classes from "./App.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

let unsubscribe = null;

class App extends Component {
  state = {
    formTitle: "",
    formBody: "",
    author: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const { formTitle, formBody, author } = this.state;

    if (!formTitle || !formBody || !author) return;

    this.createPost({
      variables: {
        title: formTitle,
        body: formBody,
        published: true,
        authorId: author
      }
    });

    this.setState({
      formTitle: "",
      formBody: "",
      author: ""
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1 className={classes.title}>Modern GraphQL Tutorial</h1>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className={classes.form}>
            <Mutation mutation={CREATE_POST_MUTATION}>
              {createPost => {
                this.createPost = createPost;

                return (
                  <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Author
                      </Label>
                      <Col sm={10}>
                        <Query query={USERS_QUERY}>
                          {({ loading, error, data, subscribeToMore }) => {
                            if (loading) return <p>Loading...</p>;
                            if (error) return <p>Error :(((</p>;

                            const users = data.users.map((user, id) => (
                              <MenuItem value={user.id} key={id}>
                                {user.name}
                              </MenuItem>
                            ));

                            return (
                              <Select
                                value={this.state.author}
                                onChange={e =>
                                  this.setState({ author: e.target.value })
                                }
                              >
                                {users}
                              </Select>
                            );
                          }}
                        </Query>
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="title" sm={2}>
                        Title
                      </Label>
                      <Col sm={10}>
                        <Input
                          name="title"
                          value={this.state.formTitle}
                          id="title"
                          placeholder="Post title..."
                          onChange={e =>
                            this.setState({ formTitle: e.target.value })
                          }
                        />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="body">Body</Label>
                      <Input
                        type="textarea"
                        name="body"
                        value={this.state.formBody}
                        id="body"
                        placeholder="Post body..."
                        onChange={e =>
                          this.setState({ formBody: e.target.value })
                        }
                      />
                    </FormGroup>
                    <Button type="submit" color="primary">
                      Post!
                    </Button>
                  </Form>
                );
              }}
            </Mutation>
          </Col>
          <Col xs="6">
            <Query query={POSTS_QUERY}>
              {({ loading, error, data, subscribeToMore }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(((</p>;
                let authorName = {};
                for (let i = 0; i < data.posts.length; i++) {
                  let name = data.posts[i].author.name;
                  if (name in authorName) {
                    authorName[name].num += 1;
                    authorName[name].posts.push(data.posts[i]);
                  } else {
                    authorName[name] = {
                      num: 1,
                      posts: [data.posts[i]]
                    };
                  }
                }

                const posts = Object.keys(authorName).map((user, id) => (
                  <ExpansionPanel key={id}>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography style={{ minWidth: "60%" }}>
                        {user}
                      </Typography>
                      <Typography>num: {authorName[user].num}</Typography>
                    </ExpansionPanelSummary>

                    {authorName[user].posts.map((post, id) => (
                      <ExpansionPanelDetails>
                        <Post data={post} key={id} />
                      </ExpansionPanelDetails>
                    ))}
                  </ExpansionPanel>
                ));
                if (!unsubscribe)
                  unsubscribe = subscribeToMore({
                    document: POSTS_SUBSCRIPTION,
                    updateQuery: (prev, { subscriptionData }) => {
                      if (!subscriptionData.data) return prev;
                      const newPost = subscriptionData.data.post.data;

                      return {
                        ...prev,
                        posts: [newPost, ...prev.posts]
                      };
                    }
                  });

                return <div>{posts}</div>;
              }}
            </Query>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
