import * as React from "react";
import { DemoConfig } from "../../demos";
import { ModelConfig } from "../../models";

const models: ModelConfig[] = [
  {
    id: "sentic-gcn",
    desc:
      "This is a neural network that utilises LSTM and GCN to detect the sentiment polarities of different aspects in the same sentence. " +
      "The models used corresponds to the associated models described in the paper.",
    displayName: "Sentic GCN",
    usage: {
      fromBackend: true,
    },
  },
];

const config: DemoConfig = {
  taskId: "aspect-based-sentiment-analysis",
  title: "Aspect-Based Sentiment Analysis",
  desc:
    <div>
      Aspect-based sentiment analysis aims to classify the sentiment polarities of aspects found within the text.
      An aspect is a term that is relevant for sentiment analysis, for example a product's attributes or feature.
      A typical use case for to use it to analyze product reviews to understand which specific features in a product
      bring about positive/negative feedback from the consumers.
      There are also models that aim to perform the aspect extraction and sentiment analysis in an end-to-end fashion.<br></br>
      For demonstration purposes, this demo only support single word aspect.
      Using the model from the python package allows multiple-word aspects.,
    </div>,
  models: models,
};

export default config;
