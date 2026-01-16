const projects = [
    {
        year: "2025",
        title: "LLM Inference Engine",
        tech: "C++ / CUDA",
        description: "Distributed Llama3/Qwen2 engine with FlashAttention.",
        details: "<ul><li>Implemented Tensor Parallelism and FlashAttention strategies.</li><li>Achieved 1.5-3.5x attention speedup compared to baseline.</li><li>Custom KV Cache management with pre-allocation.</li></ul>",
        link: "https://github.com/sylvia-ymlin/13-LLM-Inference-Engine"
    },
    {
        year: "2025",
        title: "Nano-vLLM",
        tech: "Python / PyTorch",
        description: "Lightweight inference framework in ~1200 lines.",
        details: "<ul><li>Built a vLLM-like engine in ~1,200 lines of Python.</li><li>Comparable throughput to vLLM using prefix caching.</li><li>Supports optional CUDA graph recording.</li></ul>",
        link: "https://github.com/sylvia-ymlin/15-nano-vllm"
    },
    {
        year: "2025",
        title: "Intelligent Book RecSys",
        tech: "RAG / React",
        description: "Agentic RAG + RecSys platform with LLM streaming.",
        details: "<ul><li>Semantic search using ChromaDB.</li><li>Personalized recommendations via SASRec and XGBoost.</li><li>Real-time LLM streaming response for user queries.</li></ul>",
        link: "https://github.com/sylvia-ymlin/08-book-rec-with-LLMs"
    },
    {
        year: "2024",
        title: "CUDA Kernels",
        tech: "CUDA / Triton",
        description: "Optimized SGEMM kernels (83% of cuBLAS).",
        details: "<ul><li>Optimized SGEMM with tiling and double buffering.</li><li>Implemented vectorized loads for memory bandwidth saturation.</li><li>Includes custom PyTorch extensions.</li></ul>",
        link: "https://github.com/sylvia-ymlin/07-cuda-kernels-from-scratch"
    },
    {
        year: "2024",
        title: "MiniMind LLM",
        tech: "PyTorch / RLHF",
        description: "26M param LLM trained from scratch (Pretrain->RLAIF).",
        details: "<ul><li>Full pipeline: Pretraining -> SFT -> LoRA -> DPO -> RLAIF.</li><li>Trained on consumer hardware.</li><li>Educational implementation of modern LLM scaling laws.</li></ul>",
        link: "https://github.com/sylvia-ymlin/16-minimind-workthrough"
    },
    {
        year: "2024",
        title: "Distributed MPI Solver",
        tech: "MPI / HPC",
        description: "Parallel CG solver achieving 28x speedup on 64 cores.",
        details: "<ul><li>Domain decomposition for parallel processing.</li><li>Achieved 28.8x speedup on 64 cores.</li><li>Optimized Halo exchange communication.</li></ul>",
        link: "https://github.com/sylvia-ymlin/05-CG-Solver"
    },
    {
        year: "2024",
        title: "Real-time Object Detection",
        tech: "YOLO / ONNX",
        description: "Video pipeline with YOLOv8 + DeepSORT.",
        details: "<ul><li>YOLOv8 + DeepSORT integration.</li><li>Optimized with ONNX Runtime for 30ms latency.</li><li>Features a Streamlit-based GUI launcher.</li></ul>",
        link: "https://github.com/sylvia-ymlin/19-Real-time-Object-Detection-Demo"
    },
    {
        year: "2023",
        title: "miniWeather Hybrid",
        tech: "MPI / OpenACC",
        description: "Hybrid parallel solver for atmospheric simulations.",
        details: "<ul><li>Hybrid Parallelism: MPI + OpenMP + OpenACC.</li><li>Runs efficiently on CPU clusters and GPU accelerators.</li><li>Solves 'Memory Wall' issues in atmospheric simulation.</li></ul>",
        link: "https://github.com/sylvia-ymlin/11-miniWeather-hybrid-parallel"
    },
    {
        year: "2023",
        title: "Housing Prices MLOps",
        tech: "ZenML / Cloud Run",
        description: "End-to-end MLOps pipeline on Google Cloud.",
        details: "<ul><li>Automated deployment with ZenML and MLflow.</li><li>A/B testing strategies on Google Cloud Run.</li><li>Reproducible experiment tracking.</li></ul>",
        link: "https://github.com/sylvia-ymlin/06-prices-predictor-system"
    },
    {
        year: "2023",
        title: "N-Body Simulation",
        tech: "C11 / AVX2",
        description: "O(N log N) Barnes-Hut with AVX2 & custom allocators.",
        details: "<ul><li>Custom arena allocators for 478x speedup over malloc.</li><li>Morton code reordering for cache locality.</li><li>Vectorized AVX2 force calculations.</li></ul>",
        link: "https://github.com/sylvia-ymlin/04-nBody-Problem-Simulation"
    }
];

const listContainer = document.getElementById('project-list');
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalGithub = document.getElementById('modal-github');
const closeModal = document.querySelector('.close-modal');

function renderList() {
    listContainer.innerHTML = '';
    // projects.sort((a, b) => b.year - a.year); // Keep original order or sort

    projects.forEach((p, index) => {
        const li = document.createElement('li');
        li.className = 'card';

        // Use anchor for the whole card to trigger modal
        const a = document.createElement('a');
        a.href = "#";
        a.onclick = (e) => {
            e.preventDefault();
            openModal(index);
        };

        a.innerHTML = `
            <span class="header">${p.title}</span>
            <div class="dashed"></div> <!-- Dashed line separator like theme -->
            <p class="body">${p.description}</p>
        `;

        li.appendChild(a);
        listContainer.appendChild(li);
    });
}

function openModal(index) {
    const p = projects[index];
    modalTitle.textContent = p.title;

    let content = `<p style="margin-bottom: 1rem;">${p.description}</p>`;
    if (p.details) content += p.details;
    content += `<p style="margin-top:1rem; font-size:0.85rem; color:var(--text-secondary);">Tech Stack: ${p.tech} | Year: ${p.year}</p>`;

    modalBody.innerHTML = content;

    // Construct GitHub info
    const defaultGithubRoot = "https://github.com/sylvia-ymlin";
    const githubUrl = p.link.startsWith('http') ? p.link : `${defaultGithubRoot}/${p.link.replace('../', '')}`;
    modalGithub.href = githubUrl;

    modal.showModal();
}

closeModal.addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    if (e.target === modal) modal.close();
});

document.addEventListener('DOMContentLoaded', renderList);
