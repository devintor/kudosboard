const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const PORT = 3000

app.use(express.json());
app.use(cors());

// Route to get all boards
app.get('/boards', async (req, res) => {
    const boards = await prisma.board.findMany({
        include: {
            cards: true, // Include related cards
        },
    });
    res.json({ boards });
});

// Route to create a new board
app.post('/boards', async (req, res) => {
    const { title, category, owner } = req.body;
    const newBoard = await prisma.board.create({
        data: {
            title,
            category,
            owner,
        },
    });
    res.json(newBoard);
});

// Route to get a specific board
app.get('/boards/:board_id', async (req, res) => {
    const { board_id } = req.params;
    // console.log("Board ID:", board_id);
    // console.log(req.params);
    const board = await prisma.board.findUnique({
        where: { board_id: parseInt(board_id) },
        include: {
            cards: true,
        },
    });
    if (board) {
        res.json(board);
    } else {
        res.status(404).send('Board not found');
    }
});

// Route to delete a board
app.delete('/boards/:board_id', async (req, res) => {
    const { board_id } = req.params;
    await prisma.board.delete({
        where: { board_id: parseInt(board_id) },
    });
    res.send('Board deleted');
});

// Route to create a new card
app.post('/boards/:board_id/cards', async (req, res) => {
    const { board_id } = req.params;
    const { title, description, gif, owner } = req.body;
    const card = await prisma.card.create({
        data: {
            title,
            description,
            gif,
            owner,
            board_id: parseInt(board_id),
        },
    });
    res.json(card);
});

// Route to upvote a card
app.patch('/boards/:board_id/cards/:card_id/votes', async (req, res) =>{
    const {card_id} = req.params;
    const { votes } = req.body;

    try {
        const updatedCard = await prisma.card.update({
          where: {
            card_id: parseInt(card_id),
          },
          data: {
            votes: votes,
          },
        });
        res.json(updatedCard);
      } catch (error) {
        console.error("Error updating card votes:", error);
        res.status(500).send("Failed to update votes");
      }
})

// Route to delete a card
app.delete('/boards/:board_id/cards/:card_id', async (req, res) => {
    const { card_id } = req.params;
    await prisma.card.delete({
        where: { card_id: parseInt(card_id) },
    });
    res.send('Card deleted');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});