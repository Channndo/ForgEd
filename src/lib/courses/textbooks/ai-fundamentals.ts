import type { TextbookIntro, TextbookChapter } from "@/lib/courses/textbook/types";
import { section, chapter } from "@/lib/courses/textbook/factory";

export const AI_TEXTBOOK_INTRO: TextbookIntro = {
  title: "Artificial Intelligence Fundamentals",
  subtitle:
    "ForgEd deep-dive — computation, machine learning, large language models, ethics, and human-AI collaboration",
  paragraphs: [
    "Artificial intelligence is not a single invention but a long scientific and engineering project to build systems that perceive, reason, learn, and act in ways that resemble—or exceed—human cognitive performance on defined tasks. From early symbolic programs that manipulated logical formulas to today's large neural networks trained on vast corpora, the field has repeatedly redefined what 'intelligence' means in machines and what society should expect from automated decision-making.",
    "This ForgEd textbook presents ten chapters that move from foundational ideas about intelligence and computation through the history of AI research, core machine learning and neural network theory, contemporary large language models and tool use, multimodal systems, ethical and safety considerations, workplace applications, and plausible futures for human-AI partnership. The tone is academic and explanatory: definitions, historical context, mechanisms, and implications—not hype or product marketing.",
    "Readers should treat this material as general education, not as legal, medical, or professional licensing advice. AI capabilities change quickly; frameworks such as the NIST AI Risk Management Framework and OECD AI Principles are cited where they help structure responsible practice. Use the table of contents to study sequentially or to revisit specific topics before projects, coursework, or workplace conversations about AI adoption.",
  ],
};

export const AI_TEXTBOOK: TextbookChapter[] = [
  chapter(
    "intelligence-computation",
    1,
    "Intelligence, computation, and what machines can represent",
    [
      section(
        "defining-intelligence",
        "1.1 Defining intelligence in natural and artificial systems",
        [
          "Intelligence, in everyday language, suggests the ability to adapt, solve problems, and achieve goals in varied environments. Psychologists and cognitive scientists debate whether intelligence is a single general capacity (often labeled g) or a bundle of specialized faculties such as memory, language, spatial reasoning, and social inference. For artificial systems, researchers operationalize intelligence through task performance: can a program play chess, classify images, translate text, or plan routes under uncertainty?",
          "Alan Turing proposed an influential behavioral test in 1950: if a human interrogator cannot reliably distinguish a machine's typed answers from a person's, the machine may be said to exhibit intelligent behavior for practical purposes. Critics note that the Turing Test emphasizes linguistic mimicry and can be gamed without genuine understanding. Modern benchmarks instead evaluate accuracy, robustness, calibration, and generalization across datasets and tasks.",
          "A useful working definition for this course treats intelligence as goal-directed competence supported by representation, inference, and learning. Representation encodes facts and uncertainty; inference derives conclusions or plans; learning improves performance from experience. Whether a thermostat, spreadsheet macro, or billion-parameter neural network counts as 'intelligent' depends on the difficulty of the environment and the flexibility of the system's responses.",
        ]
      ),
      section(
        "computation-algorithms",
        "1.2 Computation, algorithms, and complexity",
        [
          "Every AI system runs on physical computers that execute algorithms—finite, step-by-step procedures that transform inputs into outputs. The Church-Turing thesis holds that any effectively computable function can be computed by a Turing machine, which grounds the mathematical study of what machines can, in principle, calculate. In practice, hardware limits, memory bandwidth, and energy consumption determine which algorithms are feasible at scale.",
          "Computational complexity classifies problems by resource requirements. Class P contains problems solvable in polynomial time relative to input size; NP contains problems whose solutions can be verified quickly, though finding solutions may be exponentially hard. Many planning, scheduling, and combinatorial optimization tasks encountered in AI are NP-hard, motivating heuristics, approximation algorithms, and learned policies that trade optimality for speed.",
          "Algorithm design in AI spans search (exploring state spaces), dynamic programming (reusing subproblem solutions), constraint satisfaction, probabilistic inference, and gradient-based optimization for neural networks. Understanding complexity helps explain why brute-force reasoning fails on large problems and why learning from data can outperform hand-coded rules when patterns are statistical rather than purely logical.",
        ],
        {
          bulletPoints: [
          "Algorithm: a precise procedure that terminates and produces an output for each valid input",
          "State space: the set of configurations a problem solver can occupy while searching for a goal",
          "Heuristic: a rule of thumb that guides search toward promising regions without guaranteeing optimality",
          "Big-O notation: describes how runtime or memory grows as input size increases",
          "Trade-off: exact reasoning versus scalable approximation or learned behavior",
        ],
        }
      ),
      section(
        "representation-knowledge",
        "1.3 Representation, knowledge, and uncertainty",
        [
          "Intelligent behavior requires internal structures that stand for the world. Early AI used symbolic representations—facts in predicate logic, semantic networks, and frames—to support deductive inference. Expert systems encoded if-then rules distilled from human specialists. Such approaches excel when knowledge is stable and rules are explicit, but they struggle when perception is noisy and rules are incomplete.",
          "Probability theory provides a language for uncertainty. Bayesian networks compactly represent joint distributions over many variables and support diagnostic reasoning. Markov decision processes model sequential decisions under stochastic transitions. Modern machine learning often learns distributed representations—vectors in high-dimensional space—rather than human-readable symbols, yet the underlying question remains: what does the system believe, and with what confidence?",
          "Knowledge acquisition—the bottleneck of expert systems—motivated learning from data. Representation choices shape what a system can learn, explain, and audit. As AI enters regulated domains, the tension between opaque embeddings and interpretable structures becomes a design and governance issue, not merely a technical detail.",
        ]
      ),
      section(
        "limits-classical",
        "1.4 Limits of classical AI and the case for learning",
        [
          "Classical AI pursued general problem solvers and logical theorem provers. Results were impressive on toy domains but brittle in open worlds. The frame problem—how to represent what stays unchanged when an action occurs—illustrated the difficulty of commonsense reasoning with explicit logic alone. Perception, motor control, and language understanding resisted hand-crafted rule sets.",
          "Moravec's paradox observes that high-level reasoning requires little computation in early robots, while low-level sensorimotor skills demand enormous resources. Children learn visual and motor skills through interaction; symbolic AI often skipped that grounding. Connectionism and later deep learning proposed that many competencies emerge from statistical regularities in data rather than from manually authored axioms.",
          "Contemporary systems combine learning with structured modules: retrieval over documents, tool APIs, planners, and safety filters. The lesson of Chapter 1 is conceptual: intelligence in machines is not magic but engineered representation, search, inference, and learning—constrained by computation, data, and the environments we ask systems to master.",
        ],
        {
          citations: [
          {
            source: "Alan Turing, 'Computing Machinery and Intelligence' (Mind, 1950)",
            url: "https://redirect.cs.umbc.edu/courses/471/papers/turing.pdf",
            note: "Introduces the imitation game and foundational questions about machine intelligence.",
          },
          {
            source: "Russell & Norvig, Artificial Intelligence: A Modern Approach (Pearson)",
            url: "https://aima.cs.berkeley.edu/",
            note: "Standard reference for search, logic, probability, and learning in AI curricula.",
          },
        ],
        }
      ),
      section(
        "environments-agents",
        "1.5 Agents, environments, and rational action",
        [
          "AI textbooks often model an agent—anything that perceives and acts—situated in an environment described along dimensions such as observability, determinism, episodic versus sequential structure, and single-agent versus multi-agent interaction. A rational agent selects actions that maximize expected utility given its percept history and built-in performance measure.",
          "Simple reflex agents map percepts directly to actions; model-based agents maintain internal state; goal-based agents plan toward objectives; utility-based agents trade off competing goals under uncertainty. Learning agents improve the mapping from percepts to actions over time. Robotics and autonomous vehicles instantiate these ideas under real-time safety constraints.",
          "Designers must align the performance measure with human values; a misspecified reward can produce harmful shortcut behavior, a theme revisited in ethics and safety chapters. Framing AI as agent design clarifies why data, sensors, actuators, and feedback loops matter as much as model architecture.",
        ],
        {
          bulletPoints: [
          "Agent: entity that perceives via sensors and acts via actuators",
          "Fully observable versus partially observable environments",
          "Episodic tasks: independent trials; sequential tasks: current actions affect future outcomes",
          "Utility: numerical score capturing preferences over world states",
          "Rationality: optimal action given available information, not omniscience",
        ],
        }
      ),
    ],
    "Foundations from Turing to rational agents"
  ),
  chapter(
    "history",
    2,
    "History: From symbolic AI to deep learning",
    [
      section(
        "origins-dartmouth",
        "2.1 Origins, Dartmouth, and the symbolic era",
        [
          "The term 'artificial intelligence' gained currency after the 1956 Dartmouth workshop organized by John McCarthy, Marvin Minsky, Nathaniel Rochester, and Claude Shannon. Participants believed that every aspect of learning could be precisely described and simulated by machines. Early successes included the Logic Theorist (1956), which proved theorems, and Samuel's checkers program that learned through self-play.",
          "Government funding in the United States and United Kingdom fueled optimism. Researchers developed general problem solvers, natural language interfaces like SHRDLU (1970), and expert systems such as MYCIN (1970s) for medical diagnosis in infectious disease. Symbolic AI treated intelligence as manipulation of symbols according to rules, mirroring philosophical traditions that linked thought to formal logic.",
          "By the mid-1970s, limitations appeared. The Lighthill report (1973) criticized lack of progress on ambitious goals, contributing to reduced support in Britain—the first 'AI winter.' Similar cycles would follow when promised applications lagged hardware and data realities. Nevertheless, expert systems flourished commercially in the 1980s, embedding rule bases in corporations for configuration and troubleshooting.",
        ]
      ),
      section(
        "winters-connectionism",
        "2.2 AI winters and the rise of connectionism",
        [
          "Expert systems were expensive to maintain; brittle rules failed outside narrow domains. Fifth-generation computer projects overseas did not deliver general intelligence. Funding contracted again in the late 1980s and early 1990s. Meanwhile, machine learning—particularly statistical methods—advanced in isolation from symbolic hype.",
          "Connectionist models, inspired by simplified neurons, had existed since the perceptron (Rosenblatt, 1958). Backpropagation (popularized in the 1980s) enabled training multilayer networks. Hinton, Rumelhart, and Williams demonstrated internal representations emerging from gradient descent. Yet without large datasets and fast GPUs, neural networks remained secondary to support vector machines and ensemble trees through the 1990s.",
          "Probabilistic AI unified logic and uncertainty: hidden Markov models for speech, Bayesian networks for diagnosis, and reinforcement learning for control. IBM's Deep Blue defeated world chess champion Garry Kasparov in 1997 through specialized search and hardware, not deep learning—a milestone of engineering rather than general AI.",
        ],
        {
          bulletPoints: [
          "1956 — Dartmouth workshop coins 'artificial intelligence' as a research agenda",
          "1973 — Lighthill report contributes to first major funding contraction",
          "1980s — Expert systems commercial peak (e.g., XCON at DEC)",
          "1986 — Backpropagation revitalizes neural network research",
          "1997 — Deep Blue defeats Kasparov in chess",
        ],
        }
      ),
      section(
        "big-data-gpu",
        "2.3 Big data, GPUs, and the ImageNet turning point",
        [
          "The internet, digitized media, and enterprise databases produced datasets orders of magnitude larger than laboratory collections. Graphics processing units, originally built for video games, parallelized matrix operations central to neural network training. Together, data and hardware shifted the competitive advantage toward deep learning.",
          "In 2012, Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton's AlexNet dramatically reduced error on the ImageNet image classification benchmark using convolutional neural networks trained on GPUs. Industry labs adopted deep vision systems for search, advertising, and autonomous vehicle perception. Speech recognition and machine translation soon converted to end-to-end neural architectures, displacing pipeline systems built over decades.",
          "AlphaGo's victory over Lee Sedol in 2016 combined deep networks with Monte Carlo tree search, signaling that complex sequential decision-making could benefit from learned pattern recognition plus explicit lookahead. Research agendas expanded to reinforcement learning at scale, generative modeling, and self-supervised pretraining on unlabeled corpora.",
        ],
        {
          citations: [
          {
            source: "Krizhevsky, Sutskever & Hinton, 'ImageNet Classification with Deep CNNs' (NeurIPS 2012)",
            url: "https://papers.nips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks",
            note: "Landmark result that accelerated industrial adoption of deep convolutional networks.",
          },
        ],
        }
      ),
      section(
        "transformer-era",
        "2.4 Transformers, foundation models, and the current wave",
        [
          "Recurrent networks processed sequences step by step; long-range dependencies were hard to learn. The Transformer architecture (Vaswani et al., 2017) replaced recurrence with self-attention, allowing parallel training on long contexts. BERT and GPT families demonstrated that language understanding and generation could be pre-trained on web-scale text then adapted to downstream tasks.",
          "Foundation models—large models trained on broad data and adaptable to many applications—became central industrial assets. Scaling laws suggested predictable improvements in loss with model size, data, and compute, though capabilities are task-dependent and non-linear. Chat-oriented assistants brought conversational interfaces to hundreds of millions of users, raising questions about reliability, copyright, labor markets, and concentration of compute.",
          "History does not repeat exactly, but patterns persist: exuberance, skepticism, consolidation, and regulation follow technical breakthroughs. Understanding symbolic, statistical, and deep learning eras helps practitioners choose tools—rules, classical ML, or neural nets—appropriate to data, interpretability needs, and risk.",
        ]
      ),
      section(
        "historical-lessons",
        "2.5 Lessons for practitioners and policymakers",
        [
          "AI progress has been uneven: perception and pattern recognition leaped ahead while robust reasoning and causal understanding remain active research frontiers. Winter cycles remind organizations not to bet solely on marketing narratives; sustained value often comes from narrow, well-measured automation with human oversight.",
          "National strategies now treat AI as economic and security infrastructure. Export controls on advanced chips, open-weight model releases, and public research funding reshape who can build frontier systems. Historical literacy supports informed participation in these debates without assuming either inevitable superintelligence or permanent stagnation.",
          "Students should read primary sources—Turing, McCarthy, Minsky, Rosenblatt, Rumelhart, and contemporary scaling papers—to see how questions evolve yet persist. The next chapters unpack the statistical and architectural ideas that the historical narrative previews.",
        ],
        {
          bulletPoints: [
          "Symbolic AI: explicit rules and logic; strong interpretability, weak scalability in open worlds",
          "Statistical ML: data-driven patterns; requires features and careful validation",
          "Deep learning: representation learning; needs data, compute, and monitoring for failure modes",
          "Foundation models: pre-trained generality with fine-tuning or prompting for specialization",
          "Policy: antitrust, safety, labor, and intellectual property follow capability shifts",
        ],
        }
      ),
    ]
  ),
  chapter(
    "ml-foundations",
    3,
    "Machine learning foundations",
    [
      section(
        "learning-problem",
        "3.1 The supervised learning problem",
        [
          "Supervised learning begins with a dataset of input-output pairs drawn from an unknown joint distribution. The learner constructs a function that maps inputs to predicted outputs, hoping to generalize to new inputs not seen during training. Regression predicts continuous values; classification assigns discrete labels. The hypothesis space—linear models, trees, kernels, neural nets—defines what patterns are discoverable.",
          "Training minimizes a loss function measuring discrepancy between predictions and labels. Mean squared error suits regression; cross-entropy suits classification. Optimization algorithms such as stochastic gradient descent adjust parameters iteratively using mini-batches. Regularization penalizes complexity to reduce overfitting, balancing fit on training data against performance on held-out validation data.",
          "Generalization error decomposes into bias (systematic underfitting), variance (sensitivity to sampling noise), and irreducible Bayes error from inherent randomness. Model selection and cross-validation estimate future performance. No free lunch theorems remind us that no learner is universally best across all possible problems—domain assumptions matter.",
        ]
      ),
      section(
        "data-features",
        "3.2 Data quality, features, and leakage",
        [
          "Machine learning quality is bounded by data quality. Missing values, label noise, sampling bias, and temporal drift degrade models silently. Exploratory analysis examines distributions, outliers, and correlations. Stratified splits preserve rare class proportions. For time series and transactional data, random shuffles cause leakage—future information sneaking into training—so chronological splits are required.",
          "Feature engineering transforms raw inputs into representations that expose structure: log transforms for skewed counts, one-hot encoding for categories, text tokenization, and domain-specific aggregates. Deep learning reduces manual feature design by learning layers, yet practitioners still curate datasets, label policies, and metadata. Documentation such as datasheets for datasets supports accountability.",
          "Label leakage occurs when proxies accidentally encode the target—predicting hospital readmission using billing codes that include post-admission procedures, for example. Group leakage crosses related records between train and test sets. Rigorous pipelines isolate preprocessing within cross-validation folds to mimic deployment conditions.",
        ],
        {
          bulletPoints: [
          "Training set: used to fit parameters; validation set: tune hyperparameters; test set: final unbiased estimate",
          "Overfitting: low training error, poor test error; underfitting: overly simple model",
          "Class imbalance: accuracy can mislead; use precision, recall, F1, or calibrated probabilities",
          "Data leakage: information from outside training should not influence evaluation",
          "Reproducibility: version data, code, seeds, and environment specifications",
        ],
        }
      ),
      section(
        "unsupervised-rl",
        "3.3 Unsupervised learning and reinforcement learning",
        [
          "Unsupervised learning discovers structure without labeled targets. Clustering partitions examples into groups; dimensionality reduction projects high-dimensional data into fewer coordinates for visualization or denoising. Autoencoders and generative models learn latent variables that can synthesize or impute data. Self-supervised pretext tasks—predicting masked words or image patches—create supervisory signals from raw observations at scale.",
          "Reinforcement learning frames an agent interacting with an environment to maximize cumulative reward. Policies map states to actions; value functions estimate expected return. Exploration versus exploitation trade-offs appear in bandits and Markov decision processes. Deep Q-networks and policy gradient methods combine neural function approximators with RL, enabling game play and robotic control, though sample efficiency and safety remain challenges.",
          "Many production systems blend paradigms: supervised classifiers on embeddings from self-supervised pretraining, or RL fine-tuning language models from human feedback. Recognizing which problem type you face prevents misapplied algorithms and metrics.",
        ]
      ),
      section(
        "evaluation-ethics",
        "3.4 Evaluation metrics and fairness considerations",
        [
          "Metric choice shapes behavior. Accuracy fails when base rates are extreme. Precision (positive predictive value) and recall (sensitivity) trade off via decision thresholds. ROC curves and area-under-curve summarize ranking ability across thresholds. Calibration plots verify that predicted probabilities match observed frequencies—critical in lending, medicine, and forecasting.",
          "Fairness in machine learning examines disparate error rates across demographic groups defined by law or ethics. Equalized odds, demographic parity, and individual fairness criteria can conflict; no single statistic captures justice. Bias may enter through historical labels reflecting discrimination, unrepresentative sampling, or proxy variables. Mitigations include reweighting, constrained optimization, and human review of high-stakes decisions.",
          "Model cards and system cards document intended use, performance slices, limitations, and monitoring plans. Evaluation should continue after deployment as populations and adversaries shift. Chapter 8 expands ethical frameworks; here the emphasis is methodological: measure what you claim and report uncertainty.",
        ],
        {
          citations: [
          {
            source: "Mitchell, Shwartz, Baker & White, 'Model Cards for Model Reporting' (FAccT 2019)",
            url: "https://arxiv.org/abs/1810.03993",
            note: "Template for transparent documentation of ML model performance and limitations.",
          },
        ],
        }
      ),
      section(
        "mlops-lifecycle",
        "3.5 The ML lifecycle in organizations",
        [
          "Industrial machine learning spans problem formulation, data engineering, experimentation, deployment, monitoring, and retirement. MLOps adapts DevOps practices—version control, continuous integration, infrastructure as code—to models whose behavior depends on data distributions. Feature stores centralize transformations; model registries track lineage and approvals.",
          "Shadow deployments run new models alongside production without affecting users, comparing outputs. Canary releases expose a fraction of traffic. Drift detectors alert when input or label distributions change. Retraining schedules must respect regulatory constraints on automated credit and employment decisions in several jurisdictions.",
          "Teams succeed when domain experts, data scientists, engineers, and compliance officers share vocabulary from this chapter: loss, validation, leakage, metrics, and monitoring. Subsequent chapters specialize these ideas for neural networks and language models.",
        ],
        {
          bulletPoints: [
          "Experiment tracking: log hyperparameters, metrics, and artifacts for comparability",
          "Feature store: reusable, governed transformations for training and serving",
          "Monitoring: latency, throughput, data drift, concept drift, and business KPIs",
          "Human-in-the-loop: review queues for low-confidence or high-impact predictions",
          "Rollback: ability to revert models quickly when incidents occur",
        ],
        }
      ),
    ],
    "Data, algorithms, and responsible measurement"
  ),
  chapter(
    "neural-networks",
    4,
    "Neural networks and deep learning",
    [
      section(
        "perceptron-mlp",
        "4.1 From perceptrons to multilayer networks",
        [
          "A biological neuron integrates inputs and fires when activation exceeds a threshold; artificial neurons apply a weighted sum followed by a nonlinear activation function. Single-layer perceptrons solve linearly separable classification; XOR requires hidden layers. Multilayer perceptrons stack affine transformations and nonlinearities, approximating continuous functions on compact domains given sufficient width—universal approximation theorems formalize this capacity.",
          "Activations such as ReLU (rectified linear unit) mitigate vanishing gradients compared with sigmoids in deep stacks. Output layers pair activations with losses: softmax with cross-entropy for multi-class labels, linear outputs for regression. Depth enables hierarchical feature composition: early layers detect edges; deeper layers assemble parts and objects in vision networks.",
          "Training uses backpropagation to compute gradients of the loss with respect to each parameter via the chain rule. Automatic differentiation frameworks (PyTorch, TensorFlow, JAX) implement dynamic computational graphs. Initialization schemes and normalization layers stabilize optimization in very deep models.",
        ]
      ),
      section(
        "cnn-rnn",
        "4.2 Convolutional and recurrent architectures",
        [
          "Convolutional neural networks exploit translation equivariance in images: shared filters slide across spatial dimensions, reducing parameters and capturing local patterns. Pooling downsamples feature maps. Architectures such as ResNet introduce skip connections so gradients flow through dozens of layers, enabling accurate very deep models on ImageNet-scale data.",
          "Recurrent neural networks maintain hidden state across time steps for sequences. LSTM and GRU gates mitigate vanishing gradients in long sequences. Before Transformers dominated NLP, RNNs powered speech and translation. Convolutions also appear in audio (spectrograms) and time-series forecasting via temporal convolutions.",
          "Choosing architecture matches inductive bias to data geometry: grids favor CNNs; ordered sequences favored RNNs until attention models superseded many RNN deployments. Hybrid models still combine convolutions for local structure with attention for global context.",
        ],
        {
          bulletPoints: [
          "Convolution: shared weights over local patches; translation equivariance",
          "Pooling: spatial downsampling; increases receptive field",
          "RNN hidden state: summary of past inputs for sequential prediction",
          "LSTM/GRU: gating mechanisms for longer memory horizons",
          "Inductive bias: architectural assumptions that guide learning",
        ],
        }
      ),
      section(
        "optimization-regularization",
        "4.3 Optimization, regularization, and generalization in deep nets",
        [
          "Deep networks are over-parameterized yet often generalize well—a phenomenon studied via implicit regularization of stochastic gradient descent, flat minima, and double descent curves where test error may improve after interpolating training data. Learning rate schedules, momentum, and adaptive optimizers (Adam, AdamW) accelerate convergence. Batch size affects noise in gradient estimates and wall-clock time on GPUs.",
          "Explicit regularization includes L2 weight decay, dropout (randomly zeroing activations during training), and data augmentation (rotations, crops, color jitter) to simulate plausible variation. Early stopping halts training when validation loss worsens. Label smoothing discourages overconfident logits.",
          "Batch normalization and layer normalization stabilize activations across layers or sequences, enabling higher learning rates. Mixed-precision training uses lower numerical precision for speed with careful loss scaling. Hardware-aware kernel fusion further reduces latency in deployment.",
        ]
      ),
      section(
        "training-at-scale",
        "4.4 Distributed training and compute economics",
        [
          "Frontier models require clusters of accelerators communicating via high-bandwidth interconnects. Data parallelism replicates the model across devices with different mini-batches; gradients are averaged. Model parallelism shards layers across devices when parameters exceed single-GPU memory. Pipeline and tensor parallelism optimize throughput for trillion-parameter scales.",
          "Energy and cost considerations increasingly constrain research. Carbon accounting of large training runs informs institutional policies. Smaller distilled models transfer knowledge from teachers to students for inference on phones and edge devices. Open-weight releases debate benefits of transparency against misuse risks.",
          "Practitioners without cluster access can fine-tune adapters (LoRA) that train low-rank updates to frozen base weights, dramatically reducing memory needs while preserving much of the base capability.",
        ],
        {
          citations: [
          {
            source: "Hu et al., 'LoRA: Low-Rank Adaptation of Large Language Models' (ICLR 2022)",
            url: "https://arxiv.org/abs/2106.09685",
            note: "Widely used parameter-efficient fine-tuning method for large models.",
          },
        ],
        }
      ),
      section(
        "interpretability",
        "4.5 Interpretability and limitations of deep models",
        [
          "Deep models are often criticized as black boxes. Saliency maps, integrated gradients, and attention visualizations suggest influential inputs but can mislead. Concept activation vectors probe human-interpretable directions in representation space. Counterfactual explanations ask what minimal change would flip a prediction.",
          "Robustness research shows adversarial perturbations—imperceptible input changes—can fool classifiers, raising security concerns for vision in autonomous systems. Out-of-distribution detection attempts to flag inputs unlike training data. Calibration and uncertainty estimation (ensembles, Bayesian last layers) support abstention when confidence is low.",
          "Neural networks excel at perceptual and linguistic pattern recognition; they do not automatically guarantee causal reasoning, moral judgment, or factual grounding. Later chapters address alignment and tool augmentation; the architectural takeaway is powerful function approximation requiring rigorous evaluation and governance.",
        ],
        {
          bulletPoints: [
          "Adversarial example: crafted input causing wrong high-confidence prediction",
          "OOD detection: identify inputs far from training distribution",
          "Distillation: compress large model knowledge into smaller deployable model",
          "Explainability: aids human review; not a substitute for domain validation",
          "Hardware: GPUs/TPUs dominate training; CPUs/NPUs serve edge inference",
        ],
        }
      ),
    ]
  ),
  chapter(
    "llms",
    5,
    "Large language models and generative AI",
    [
      section(
        "language-modeling",
        "5.1 Language modeling and the Transformer",
        [
          "A language model assigns probabilities to sequences of tokens—subword units produced by byte-pair or sentence-piece encoders. Autoregressive models factorize joint probability as products of next-token conditionals, enabling generation by sequential sampling. Training maximizes likelihood on vast corpora, implicitly learning grammar, facts, style, and reasoning patterns present in text.",
          "Transformer blocks stack multi-head self-attention and feed-forward layers with residual connections and layer normalization. Attention computes weighted combinations of prior token representations, letting each position attend to relevant context regardless of distance. Positional encodings inject order information. Encoder-only models (BERT) excel at classification; decoder-only models (GPT) excel at generation; encoder-decoder models (T5) map inputs to outputs.",
          "Scale—parameters, data tokens, and training steps—correlates with broad capability gains, though benchmarks vary and contamination of test sets is a concern. Instruction tuning and reinforcement learning from human feedback align outputs with helpfulness and safety preferences without retraining the entire base from scratch.",
        ]
      ),
      section(
        "pretraining-finetuning",
        "5.2 Pretraining, fine-tuning, and adaptation",
        [
          "Pretraining on diverse internet text teaches general linguistic competence but also inherits biases, falsehoods, and copyrighted material. Fine-tuning on curated datasets specializes behavior—customer support, code, medicine—while risking catastrophic forgetting of general skills if not regularized. Parameter-efficient methods update small adapter matrices or prompt embeddings instead of all weights.",
          "Retrieval-augmented generation connects models to external knowledge bases: queries retrieve documents whose text is inserted into the context window, reducing reliance on parametric memory alone. Freshness and citation of sources improve factual tasks when retrieval quality is high. Hybrid systems separate memory (database) from reasoning (model).",
          "Evaluation uses perplexity for language modeling quality and task-specific benchmarks for reading comprehension, mathematics, coding, and multilingual ability. Human evaluation remains important for tone, harm, and usefulness dimensions not captured by automatic scores.",
        ],
        {
          bulletPoints: [
          "Tokenization: subword units balance vocabulary size and unknown-word handling",
          "Context window: maximum tokens processed; limits document length and tool chains",
          "Instruction tuning: train on prompt-response pairs following user intent",
          "RLHF: optimize policies against human preference rankings",
          "RAG: retrieve relevant documents before generating answers",
        ],
        }
      ),
      section(
        "capabilities-limits",
        "5.3 Capabilities, hallucinations, and epistemic limits",
        [
          "Large language models produce fluent, contextually appropriate text and code, translate languages, summarize documents, and assist brainstorming. They exhibit emergent behaviors on some benchmarks as scale increases, though emergence is debated and metric-dependent. They are not omniscient databases: they predict plausible continuations, which can be false yet authoritative in tone—hallucination.",
          "Hallucinations arise when training data is sparse, conflicting, or when the model extrapolates beyond evidence. Mitigations include retrieval, tool execution for arithmetic and lookups, constrained decoding, and asking models to quote sources then verifying them externally. Uncertainty quantification for generative models remains immature compared with classification calibration.",
          "Reasoning chains (chain-of-thought prompting) improve multi-step math and logic on some tasks by eliciting intermediate text, but reliability is inconsistent. Formal verification and symbolic solvers may wrap neural components for high-assurance domains.",
        ]
      ),
      section(
        "multimodal-generative",
        "5.4 Multimodal and generative media models",
        [
          "Vision-language models align image encoders with text decoders for captioning, visual question answering, and document understanding. Diffusion models generate images by iteratively denoising latent representations, enabling text-to-image synthesis with stylistic control. Audio models transcribe speech, clone voices, and compose music—raising consent and fraud concerns.",
          "Unified multimodal transformers tokenize images, audio patches, and text into a single sequence for joint training. Agents that see screenshots and operate user interfaces illustrate convergence of perception, language, and action. Watermarking, provenance metadata, and detector models address authenticity in synthetic media.",
          "Intellectual property law and licensing of training data are unsettled globally; organizations should track vendor terms, indemnification clauses, and regional regulations when deploying generative features.",
        ],
        {
          citations: [
          {
            source: "Vaswani et al., 'Attention Is All You Need' (NeurIPS 2017)",
            url: "https://arxiv.org/abs/1706.03762",
            note: "Introduced the Transformer architecture underpinning modern LLMs.",
          },
          {
            source: "Brown et al., 'Language Models are Few-Shot Learners' (NeurIPS 2020)",
            url: "https://arxiv.org/abs/2005.14165",
            note: "GPT-3 paper demonstrating in-context learning at scale.",
          },
        ],
        }
      ),
      section(
        "deployment-considerations",
        "5.5 Deploying language models responsibly",
        [
          "Serving LLMs requires inference optimization: quantization, key-value caching for autoregressive decoding, batching, and speculative decoding. Cost per token affects product economics. Rate limits and abuse monitoring reduce spam, malware generation, and harassment at scale.",
          "Content policies define prohibited uses; classifiers filter inputs and outputs. Logging and retention must respect privacy laws. Enterprise deployments often keep models private within virtual private clouds and forbid training on customer data without consent.",
          "Chapter 6 extends interaction patterns; Chapter 8 addresses bias and safety frameworks. The present chapter establishes that LLMs are general-purpose sequence models whose societal impact depends on integration design, not parameter count alone.",
        ],
        {
          bulletPoints: [
          "Quantization: reduce numeric precision for faster, cheaper inference",
          "KV cache: store attention keys/values during generation to avoid recomputation",
          "Latency versus quality: smaller models for interactive UI; larger for offline analysis",
          "Prompt injection: untrusted text in inputs can manipulate model behavior",
          "Governance: acceptable use policies, audit logs, and human escalation paths",
        ],
        }
      ),
    ],
    "Transformers, scale, and generative systems"
  ),
  chapter(
    "prompting-tools",
    6,
    "Prompting, tools, and agentic workflows",
    [
      section(
        "prompt-engineering",
        "6.1 Prompt design and in-context learning",
        [
          "Prompt engineering crafts inputs that steer model behavior without weight updates. Zero-shot prompts state tasks directly; few-shot prompts include exemplar input-output pairs demonstrating desired format. Role prompts ('You are a careful editor') set tone; system messages in chat APIs separate developer instructions from user content.",
          "Chain-of-thought and tree-of-thought prompts elicit intermediate reasoning steps, improving performance on arithmetic and planning puzzles in some studies. Self-consistency samples multiple reasoning paths and votes on final answers. Prompt order and example selection bias outcomes—sensitivity that complicates reproducibility.",
          "Structured outputs request JSON or XML schemas; constrained decoding enforces valid syntax. Templates should be version-controlled like code, with regression tests on golden prompts when models upgrade.",
        ]
      ),
      section(
        "tools-apis",
        "6.2 Tool use, function calling, and APIs",
        [
          "Tool-augmented models invoke external functions—search, calculators, databases, ticket systems—described by schemas the model fills with arguments. The runtime executes functions and returns observations to the model loop. This pattern grounds answers in live data and precise computation, reducing arithmetic hallucinations.",
          "Security requires authenticating tool access, scoping permissions, and sanitizing arguments to prevent SQL injection or shell commands from model-suggested parameters. Human approval gates may be mandatory for financial transfers or record deletion. Idempotent tools and timeouts handle flaky dependencies.",
          "Composability emerges: a planner model decomposes tasks; specialist models or APIs handle subtasks; a critic model verifies results. Observability traces each step for debugging and compliance.",
        ],
        {
          bulletPoints: [
          "Function schema: name, parameters, descriptions consumed by the model",
          "Tool loop: model proposes call → runtime executes → result appended to context",
          "Least privilege: grant tools minimum permissions required for the workflow",
          "Human-in-the-loop: approve high-impact actions before execution",
          "Tracing: log prompts, tool calls, latencies, and errors for incident review",
        ],
        }
      ),
      section(
        "agents-planning",
        "6.3 Agents, planning, and multi-step workflows",
        [
          "An AI agent iterates perception, reasoning, and action toward a goal. ReAct-style prompts interleave reasoning traces with tool actions. Memory modules store summaries across sessions—vector databases retrieve relevant past notes. Termination conditions prevent infinite loops when models repeat failed strategies.",
          "Planning algorithms from classical AI—hierarchical task networks, A* search—can supervise or verify neural proposals. Neuro-symbolic integration keeps explicit constraints while learning heuristics. For enterprise workflows, deterministic scripts with LLM-filled slots often outperform fully autonomous agents on reliability metrics.",
          "Benchmarks such as web navigation and software engineering tasks quantify agent progress but may not reflect enterprise security boundaries. Sandboxing browsers and code interpreters limits blast radius when models explore environments.",
        ]
      ),
      section(
        "evaluation-prompts",
        "6.4 Evaluating prompts and agent systems",
        [
          "Offline evaluation suites measure task success rates, tool call accuracy, latency, and cost per resolved ticket. Red-team prompts probe policy violations. Online A/B tests compare assistant versions on user satisfaction and escalation rates to humans.",
          "Regression arises when foundation model upgrades change formatting or reasoning style. Golden datasets with expected tool traces help detect drift. LLM-as-judge evaluation uses a strong model to score outputs, though biases toward verbose or self-similar text must be monitored.",
          "Documentation should specify intended users, prohibited domains (medical diagnosis without licensure), and fallback behaviors when confidence is low—refer to professionals, refuse, or retrieve policies.",
        ],
        {
          citations: [
          {
            source: "Yao et al., 'ReAct: Synergizing Reasoning and Acting in Language Models' (ICLR 2023)",
            url: "https://arxiv.org/abs/2210.03629",
            note: "Influential pattern interleaving chain-of-thought with tool actions.",
          },
        ],
        }
      ),
      section(
        "product-patterns",
        "6.5 Product patterns for human-AI collaboration",
        [
          "Effective interfaces show provenance: quoted sources, tool outputs, and confidence cues. Users edit drafts rather than accepting monolithic generations. Copilots suggest next steps in IDEs, CRMs, and design tools while preserving user agency.",
          "Workflow integration beats standalone chat for adoption: embed assistance where work already occurs, with single sign-on and role-based access. Training materials teach verification habits—checking citations, running tests on generated code, and validating calculations independently.",
          "Organizations should maintain prompt libraries, approved tool connectors, and incident playbooks for misuse. Chapter 9 connects these patterns to workplace change management; Chapter 10 considers longitudinal evolution of agent capabilities.",
        ],
        {
          bulletPoints: [
          "Copilot pattern: suggest, user confirms, system learns from edits where appropriate",
          "Citation UI: link retrieved passages to claims in generated text",
          "Sandbox: isolate code execution from production networks",
          "Versioning: tag prompts and tools with model release compatibility",
          "Escalation: seamless handoff to human experts with conversation context",
        ],
        }
      ),
    ],
    "From prompts to reliable agentic systems"
  ),
  chapter(
    "vision-speech",
    7,
    "Computer vision, speech, and multimodal perception",
    [
      section(
        "vision-basics",
        "7.1 Image representation and convolutional perception",
        [
          "Digital images are tensors of pixel intensities across color channels. Early vision pipelines detected edges with handcrafted filters (Sobel, Canny) and aggregated features into bag-of-words classifiers. Convolutional networks replaced much of this pipeline by learning filters data-driven: oriented edges, textures, parts, and objects emerge across layers trained end-to-end.",
          "Object detection predicts bounding boxes and classes simultaneously (R-CNN family, YOLO, DETR). Semantic segmentation labels every pixel; instance segmentation distinguishes object instances. Pose estimation locates keypoints for humans and animals. Metrics include mean average precision and intersection-over-union.",
          "Domain shift—new cameras, lighting, geographies—degrades models trained elsewhere. Augmentation, domain adaptation, and periodic retraining maintain performance. Privacy concerns arise in facial recognition and surveillance contexts, prompting regulation and corporate policies on biometric data.",
        ]
      ),
      section(
        "video-3d",
        "7.2 Video, depth, and three-dimensional perception",
        [
          "Video extends spatial reasoning across time; temporal convolutions or transformers model motion and events. Action recognition labels activities in clips; tracking follows objects frame to frame. Autonomous vehicles fuse lidar, radar, and camera streams through sensor fusion networks, with safety validation beyond benchmark accuracy.",
          "Depth estimation recovers geometry from monocular cues, stereo pairs, or structured light. Neural radiance fields and Gaussian splatting reconstruct scenes for novel view synthesis. Robotics grasping pipelines segment objects, estimate poses, and plan collisions-free trajectories.",
          "Synthetic data from simulators supplements real collections when labeling is expensive or dangerous scenarios are rare. Sim-to-real transfer remains imperfect; domain randomization during training improves robustness.",
        ],
        {
          bulletPoints: [
          "Object detection: localize and classify multiple objects per image",
          "Segmentation: per-pixel class labels; instance segmentation separates objects",
          "Sensor fusion: combine modalities with different failure modes",
          "Sim-to-real: train in simulation, deploy on physical hardware with gap mitigation",
          "Safety case: evidence beyond accuracy for life-critical systems",
        ],
        }
      ),
      section(
        "speech-audio",
        "7.3 Speech recognition, synthesis, and audio understanding",
        [
          "Automatic speech recognition maps acoustic waveforms to text. Hidden Markov models with Gaussian mixtures dominated for decades; connectionist temporal classification trained end-to-end recurrent models; today Transformer encoders and Conformer architectures achieve state-of-the-art word error rates on benchmarks when ample labeled speech is available.",
          "Text-to-speech synthesizes natural voices from linguistic features or directly from text. Neural vocoders generate waveforms; cloning raises consent issues—many jurisdictions require disclosure of synthetic voices in telephony and media. Speaker diarization segments audio by who spoke when, aiding meeting transcription.",
          "Audio event detection classifies environmental sounds—sirens, glass breaking—for security and accessibility. Music information retrieval analyzes tempo, key, and structure. Multilingual and low-resource language communities benefit from self-supervised pretraining on unlabeled audio.",
        ]
      ),
      section(
        "multimodal-fusion",
        "7.4 Multimodal fusion and embodied interaction",
        [
          "Multimodal models align representations across vision, language, and audio in shared embedding spaces. Contrastive learning (image-text pairs) teaches compatibility scores without explicit class labels. Vision-language models answer questions about charts, UI screenshots, and medical imaging—domains requiring domain-specific validation protocols.",
          "Embodied AI connects perception to action in simulated and real environments. Policies map pixels and language goals to motor commands. Data collection via teleoperation and human demonstrations seeds imitation learning; reinforcement learning refines skills. Safety constraints—joint limits, force thresholds—must be enforced outside the neural policy.",
          "Accessibility applications include real-time captioning, scene description for blind users, and sign language research—benefits hinge on inclusive dataset design and community partnership.",
        ],
        {
          citations: [
          {
            source: "Radford et al., 'Learning Transferable Visual Models From Natural Language Supervision' (ICML 2021)",
            url: "https://arxiv.org/abs/2103.00020",
            note: "CLIP paper on contrastive image-text pretraining widely used in multimodal systems.",
          },
        ],
        }
      ),
      section(
        "deployment-vision",
        "7.5 Deployment considerations for perceptual AI",
        [
          "Edge deployment on phones and cameras demands model compression and hardware accelerators (NPUs). Cloud APIs offer latest models but send data off-device—problematic for HIPAA-covered health imagery or industrial trade secrets. Federated learning trains aggregately without centralizing raw data, though coordination complexity is high.",
          "Adversarial patches and spoofing attacks target vision systems; liveness detection mitigates photo attacks in biometric authentication. Document AI for OCR and form understanding automates paperwork in finance and government with human audit for exceptions.",
          "Perceptual AI succeeds when teams define error costs: a false alarm in intrusion detection differs from a missed tumor on a scan. Threshold tuning and human second reads align technology with institutional risk appetite.",
        ],
        {
          bulletPoints: [
          "Word error rate: standard ASR metric; domain-specific vocabularies need customization",
          "Latency budgets: real-time captioning versus batch transcription",
          "On-device versus cloud: privacy, cost, and model freshness trade-offs",
          "Adversarial robustness: especially for security and authentication use cases",
          "Inclusive design: dialects, accents, and assistive scenarios in test sets",
        ],
        }
      ),
    ],
    "Seeing, hearing, and acting in the physical world"
  ),
  chapter(
    "ethics-safety",
    8,
    "Ethics, bias, safety, and governance",
    [
      section(
        "normative-frames",
        "8.1 Ethical frameworks and stakeholder duties",
        [
          "AI ethics asks how systems ought to be designed, deployed, and governed given impacts on individuals and societies. Consequentialist views weigh harms and benefits aggregate; deontological views emphasize rights and duties regardless of outcomes; virtue ethics highlights character and professional norms of engineers. Corporate codes of conduct operationalize these ideas into review checklists.",
          "Stakeholders include data subjects, users, workers displaced or augmented, neighbors affected by autonomous systems, shareholders, regulators, and future generations facing long-term risks. Participatory design engages affected communities early rather than consulting only after launch.",
          "Transparency—not identical to explainability—means documenting data sources, model limitations, and intended use. Accountability assigns responsibility when automated systems contribute to harm, challenging traditional liability doctrines that assume human perpetrators only.",
        ]
      ),
      section(
        "bias-fairness",
        "8.2 Bias, discrimination, and fairness interventions",
        [
          "Bias enters through historical data reflecting structural inequality, skewed sampling, subjective labels, and proxy variables correlated with protected attributes. Even without explicit gender or race fields, zip codes or shopping patterns can reintroduce disparate impact in credit and marketing.",
          "Fairness metrics conflict: equal accuracy across groups, equal false positive rates, or individual consistency cannot all hold simultaneously for imperfect models. Interventions include collecting representative data, rebalancing, adversarial debiasing, post-hoc threshold adjustment, and human review for consequential decisions.",
          "Anti-discrimination laws in employment, housing, and credit restrict certain automated practices; regulators request impact assessments. Technical fairness alone is insufficient without organizational accountability and remedies for those harmed.",
        ],
        {
          bulletPoints: [
          "Disparate impact: neutral rules that disproportionately harm protected groups",
          "Protected attributes: categories guarded by law; vary by jurisdiction",
          "Intersectionality: overlapping identities experience compounded bias",
          "Human override: required pathway when automated decisions are contested",
          "Documentation: record datasets, metrics sliced by group, and mitigation attempts",
        ],
        }
      ),
      section(
        "safety-alignment",
        "8.3 Safety, alignment, and misuse",
        [
          "AI safety research addresses accidents from misspecified objectives, robustness failures, and intentional misuse. Specification gaming occurs when agents optimize proxy rewards in unintended ways. Distributional shift breaks models trained in simulation. Red-teaming elicits dangerous outputs—weapon instructions, malware, harassment—to harden defenses before public release.",
          "Alignment seeks to ensure advanced systems pursue goals compatible with human values. Reinforcement learning from human feedback and constitutional AI apply principle-based rules during training. Debates continue on scalability to systems exceeding human oversight capacity—an active research and governance frontier, not settled science.",
          "Dual-use concerns span cyber offense, biological sequence design, and influence operations. Access controls, usage monitoring, and responsible disclosure norms mirror other powerful technologies. International dialogues explore verification and monitoring, though enforcement is difficult with private compute.",
        ],
        {
          citations: [
          {
            source: "National Institute of Standards and Technology, AI Risk Management Framework (AI RMF 1.0)",
            url: "https://www.nist.gov/itl/ai-risk-management-framework",
            note: "Voluntary U.S. framework for mapping, measuring, and managing AI risks across the lifecycle.",
          },
          {
            source: "OECD AI Principles (2019, updated guidance)",
            url: "https://www.oecd.org/en/topics/sub-issues/ai-principles.html",
            note: "International policy principles on inclusive growth, human rights, transparency, and accountability.",
          },
        ],
        }
      ),
      section(
        "privacy-law",
        "8.4 Privacy, intellectual property, and regulatory landscape",
        [
          "Training on personal data raises consent and purpose-limitation questions under GDPR-style regimes and U.S. sectoral laws. Inference can reveal sensitive attributes from seemingly benign inputs. Differential privacy adds mathematical noise during training to bound leakage; federated learning limits raw data movement.",
          "Copyright disputes examine whether training constitutes fair use or requires licensing; synthetic outputs that resemble identifiable works intensify conflicts. Patent law may cover specific technical methods but not abstract ideas. Employment law intersects when monitoring workers via AI surveillance tools.",
          "The European Union AI Act classifies applications by risk level, imposing documentation, human oversight, and conformity assessments for high-risk uses such as biometric identification and critical infrastructure. U.S. policy remains fragmented across agencies—FTC consumer protection, EEOC employment, FDA medical devices—requiring multidisciplinary compliance teams.",
        ],
        {
          laws: [
          {
            name: "EU Artificial Intelligence Act",
            year: "2024",
            summary:
              "Risk-based obligations for high-risk AI systems; transparency rules for certain general-purpose and synthetic content uses. Educational summary—not legal advice.",
          },
          {
            name: "GDPR (General Data Protection Regulation)",
            year: "2016",
            summary:
              "EU data protection law affecting personal data processing, including profiling and automated decisions with legal effects.",
          },
        ],
        }
      ),
      section(
        "governance-org",
        "8.5 Organizational governance and professional practice",
        [
          "Enterprises establish AI governance committees bridging legal, security, engineering, and business units. Model inventories track owners, data lineage, and retirement dates. Impact assessments trigger before high-risk deployments. Incident response includes disabling features, notifying users, and root-cause analysis spanning data, prompts, and tools.",
          "Professional societies publish ethics guidelines for computer scientists and engineers. Whistleblower protections and internal reporting channels reduce fear of raising concerns. Education—like this textbook—builds shared vocabulary so non-specialists can challenge unsupported claims.",
          "Ethics is not a single checklist after coding; it is continuous judgment as capabilities and norms evolve. Chapters 9 and 10 translate principles into workplace practice and long-term societal scenarios.",
        ],
        {
          bulletPoints: [
          "AI governance board: cross-functional oversight of approved use cases",
          "Impact assessment: structured review of harms before deployment",
          "Model inventory: registry of systems, owners, data, and risk tier",
          "Red-teaming: adversarial testing for safety and policy violations",
          "Transparency to users: disclose AI involvement and limitations clearly",
        ],
        }
      ),
    ],
    "Rights, risks, and institutional responsibility"
  ),
  chapter(
    "workplace-ai",
    9,
    "AI in the workplace and industry applications",
    [
      section(
        "automation-augmentation",
        "9.1 Automation, augmentation, and task redesign",
        [
          "Workplace AI spans robotic process automation—scripted rules on structured data—to generative assistants drafting emails, code, and reports. Economic history shows technology both displaces and creates tasks; net employment effects depend on demand elasticities and new task creation. Recent studies find heterogeneous impacts: some roles shrink, others grow, many transform.",
          "Augmentation emphasizes human-AI teams where software handles routine pattern matching and humans provide judgment, empathy, and accountability. Task redesign reorganizes workflows around new bottlenecks—verifying model outputs, managing exceptions, curating training data—rather than assuming drop-in speedups.",
          "Skill premiums may rise for those who orchestrate AI tools effectively; wage pressure may affect entry-level tasks most exposed to automation. Workforce development and apprenticeship models help transition workers rather than treating labor as externalized cost.",
        ]
      ),
      section(
        "sector-use-cases",
        "9.2 Sector use cases and implementation patterns",
        [
          "Healthcare applications include triage chatbots, radiology assistance, and clinical documentation scribing—each regulated as software as a medical device in many jurisdictions when diagnostic claims are made. Finance uses models for fraud detection, credit scoring under fair lending scrutiny, and algorithmic trading with market risk controls. Manufacturing deploys predictive maintenance and visual inspection on assembly lines.",
          "Retail personalizes recommendations; supply chains forecast demand. Education experiments with tutoring systems requiring safeguards for minors and academic integrity policies. Government explores permit processing and benefits eligibility with heightened due-process requirements.",
          "Successful implementations define measurable outcomes—ticket resolution time, defect rate, clinician minutes saved—and pilot before scaling. Change management trains staff on verification, not blind trust.",
        ],
        {
          bulletPoints: [
          "Copilot in software development: code completion with test and review discipline",
          "Contact centers: summarization and suggested replies with supervisor QA",
          "Legal: document review acceleration; human attorneys remain accountable",
          "HR: resume screening demands bias testing and appeal processes",
          "Marketing: content generation with brand and disclosure guidelines",
        ],
        }
      ),
      section(
        "data-enterprise",
        "9.3 Enterprise data strategy and integration",
        [
          "Corporate knowledge trapped in PDFs, wikis, and tickets motivates retrieval systems with access control mirroring source permissions. Vector databases index embeddings; hybrid search combines keyword and semantic retrieval. Freshness jobs reindex when policies change.",
          "Integration with ERP, CRM, and IT service management tools requires OAuth scopes, audit logs, and data residency choices. Synthetic data generation augments rare scenarios for training without exposing customer records, though fidelity limits apply.",
          "Total cost of ownership includes GPU inference, storage, labeling, and on-call support—not just license fees. Build versus buy decisions weigh customization needs against vendor roadmaps and security certifications (SOC 2, ISO 27001).",
        ]
      ),
      section(
        "labor-policy",
        "9.4 Labor relations, monitoring, and worker rights",
        [
          "AI-enabled monitoring—keystroke tracking, sentiment inference from video—can erode trust and violate collective bargaining agreements or privacy laws. Transparent notice, legitimate purposes, and proportionality are baseline expectations in many jurisdictions.",
          "Unions negotiate limits on surveillance and displacement timelines. Public employment services may fund reskilling. Tax and social policy debates consider whether productivity gains should fund universal services or shareholder returns exclusively.",
          "Inclusive adoption ensures workers with disabilities benefit from assistive AI rather than facing new barriers when interfaces change rapidly.",
        ],
        {
          citations: [
          {
            source: "Brynjolfsson & McAfee, The Second Machine Age (W.W. Norton)",
            url: "https://wwnorton.com/books/The-Second-Machine-Age/",
            note: "Accessible analysis of digital technology's economic and organizational effects.",
          },
        ],
        }
      ),
      section(
        "change-management",
        "9.5 Change management and measuring value",
        [
          "Executives should align AI initiatives with business strategy, not novelty. Pilot charters specify success metrics, ethical review, and exit criteria. Champions in operations partner with IT security early to avoid late vetoes.",
          "Training programs teach prompt literacy, data handling, and incident reporting. Performance reviews should not punish staff for declining unsafe uses. Celebrate cases where humans caught model errors—those catches are quality signals.",
          "Long-term competitive advantage may accrue to firms with proprietary data flywheels and process expertise, not generic model access available to all. Chapter 10 situates these dynamics in broader futures; cybersecurity chapters complement this with security-minded deployment practices.",
        ],
        {
          bulletPoints: [
          "Pilot → measure → scale: avoid enterprise-wide rollouts without evidence",
          "KPIs: quality, speed, cost, employee satisfaction, incident rate",
          "Security review: data classification, exfiltration risk, supply chain",
          "Vendor management: SLAs, indemnification, model update notification",
          "Documentation: standard operating procedures for human override",
        ],
        }
      ),
    ],
    "Productivity, policy, and practical adoption"
  ),
  chapter(
    "future-human-ai",
    10,
    "The future of human-AI partnership",
    [
      section(
        "research-frontiers",
        "10.1 Open research frontiers",
        [
          "Despite rapid progress, AI systems struggle with reliable causal reasoning, continual learning without forgetting, and sample-efficient adaptation. Neurosymbolic integration, world models that simulate environments, and improved uncertainty quantification remain active fields. Science applications—protein folding, materials discovery, climate modeling—demonstrate acceleration when paired with expert validation.",
          "Hardware roadmaps explore neuromorphic chips, optical computing, and energy-efficient accelerators. Quantum machine learning offers theoretical speedups on specialized problems but practical advantage over classical methods is limited today.",
          "Open research questions should be discussed with humility: timelines for human-level general intelligence are speculative; capability can grow in narrow domains while common sense gaps persist.",
        ]
      ),
      section(
        "societal-scenarios",
        "10.2 Societal scenarios and public interest",
        [
          "Scenarios range from widespread prosperity through scientific and educational tools to concentrated power among few compute owners and heightened surveillance. Public investment in education, broadband, and research infrastructure shapes distributional outcomes. Civic literacy—understanding strengths and limits of AI—supports democratic deliberation on regulation and public-sector use.",
          "Global cooperation competes with strategic rivalry in chip export controls and standards bodies. Dual-use tensions complicate open publication norms inherited from academic science. Civil society organizations audit impacts on marginalized communities.",
          "Art and culture face questions of authenticity, compensation for creators, and new aesthetic forms collaborating with machines. These are social choices, not purely technical optimizations.",
        ],
        {
          bulletPoints: [
          "Optimistic scenario: augmented science, medicine, and education with strong safeguards",
          "Risk scenario: concentrated markets, weak oversight, and automated harassment at scale",
          "Policy levers: antitrust, safety standards, labor adjustment, public R&D",
          "Education: lifelong learning as tasks evolve",
          "Democratic participation: hearings, comment periods, and local governance",
        ],
        }
      ),
      section(
        "human-ai-partnership",
        "10.3 Designing human-AI partnership",
        [
          "Partnership means allocating tasks by comparative advantage: machines for scale, pattern detection, and simulation; humans for values, context, empathy, and accountability. Interfaces should keep humans 'on the loop' for consequential domains—approving actions, interpreting ambiguous cases—rather than merely 'in the loop' watching passively.",
          "Education systems should teach statistical thinking, programming literacy, critical reading of generated text, and ethics alongside domain expertise. Interdisciplinary curricula merge computer science with law, philosophy, and social sciences.",
          "Metrics for partnership quality include error catch rates, time saved on drudgery, user trust calibrated to actual reliability, and absence of harm incidents—not only automation percentage.",
        ]
      ),
      section(
        "personal-career",
        "10.4 Personal learning and career pathways",
        [
          "Careers increasingly blend domain knowledge with AI fluency: bioinformaticians, computational journalists, AI safety researchers, MLOps engineers, and policy analysts. Foundational skills—Python, data analysis, experiment design, communication—remain valuable even as tools abstract coding.",
          "Portfolios demonstrating responsible projects—documented data, evaluated metrics, reflected limitations—signal professionalism more than buzzwords. Certifications exist but change quickly; understanding fundamentals from this textbook outlasts specific vendor badges.",
          "Continuous learning is mandatory as models update quarterly. Professional networks, conferences, and open-source contributions maintain currency. Mentorship helps navigate hype cycles without cynicism or uncritical enthusiasm.",
        ],
        {
          citations: [
          {
            source: "Stanford HAI AI Index Report (annual)",
            url: "https://aiindex.stanford.edu/report/",
            note: "Tracks technical progress, investment, policy, and public opinion trends globally.",
          },
        ],
        }
      ),
      section(
        "closing-synthesis",
        "10.5 Synthesis: informed citizens and builders",
        [
          "Artificial intelligence is a continuation of humanity's project to extend cognition through tools—from writing to calculators to networks. Its power demands proportionate care: scientific honesty about limits, ethical commitment to affected people, and institutional designs that align incentives with public welfare.",
          "Readers completing this textbook should explain how learning differs from memorization, why hallucinations occur, what prompting and tools accomplish, where bias enters, and how workplaces can adopt AI without abandoning accountability. These competencies support informed citizenship and responsible building alike.",
          "The story continues in practice—projects, policies, and products you help shape. Pair this knowledge with cybersecurity literacy, domain expertise, and human judgment that no model can replace.",
        ],
        {
          bulletPoints: [
          "Explain the pipeline: data → training → evaluation → deployment → monitoring",
          "Critique claims: ask for evidence, baselines, and failure analyses",
          "Advocate for governance appropriate to risk tier",
          "Collaborate across disciplines; AI is not only for engineers",
          "Stay curious and skeptical in healthy balance",
        ],
        }
      ),
    ],
    "Frontiers, policy, and lifelong learning"
  ),
];
