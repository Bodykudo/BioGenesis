
# What is BioGenesis?

During the partial differential equations course, we were asked to use PDEs to solve a real-world problem. Since we are studying systems and biomedical engineering, we decided that we shall solve a medical problem, after searching for all types of problems where PDEs can be used, we decided that we will focus on **BrC**. We decided to use PDEs to make artificial neural networks that can be used to detect BrC at its early stages.

![BioGenesis](https://i.imgur.com/L8V862r.png)
---

### What we have reached so far?
- 95.2% validation accuracy.
- 97.1% training accuracy.
- 0.14 validation loss.
- 0.07 training loss.

![Results](https://i.imgur.com/EW7v6i4.png)
#### Future work
- We are using small dataset offered by [Baheya Foundation](https://baheya.org/), so one of our constraints is the dataset.
- We will be looking to use DCGANs to generate a bigger dataset.
- We might be using transfer learning in the future to achieve better accuracy.
- We used our model to validate X-Ray breast images (The model is trained on Ultrasound images), and it showed positive results, further training can be done on X-Ray and MRI images in the future.
- We have built our [BioGenesis Website](https://biogenesis.vercel.app/), but the model deployment on web is yet to come once we reach better accuracy. 
