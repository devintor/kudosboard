const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const prisma = new PrismaClient();
const app = express();
const PORT = 3000

app.use(express.json());
app.use(cors());

// Endpoint to get all boards
app.get('/boards', async (req, res) => {
    const boards = await prisma.board.findMany({
        include: {
            cards: true, // Include related cards
        },
    });
    res.json({ boards });
});

// Endpoint to create a new board
app.post('/boards', async (req, res) => {
    const { title, category, owner } = req.body;
    const board = await prisma.board.create({
        data: {
            title,
            category,
            owner,
        },
    });
    res.json(board);
});

// Endpoint to get a specific board
app.get('/boards/:id', async (req, res) => {
    const { id } = req.params;
    const board = await prisma.board.findUnique({
        where: { id: parseInt(id) },
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

// Endpoint to delete a board
app.delete('/boards/:id', async (req, res) => {
    const { id } = req.params;
    await prisma.board.delete({
        where: { id: parseInt(id) },
    });
    res.send('Board deleted');
});

// Endpoint to create a new card
app.post('/boards/:boardId/cards', async (req, res) => {
    const { boardId } = req.params;
    const { title, description, gif, owner } = req.body;
    const card = await prisma.card.create({
        data: {
            title,
            description,
            gif,
            owner,
            boardId: parseInt(boardId),
        },
    });
    res.json(card);
});

// Endpoint to delete a card
app.delete('/boards/:boardId/cards/:cardId', async (req, res) => {
    const { cardId } = req.params;
    await prisma.card.delete({
        where: { id: parseInt(cardId) },
    });
    res.send('Card deleted');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});