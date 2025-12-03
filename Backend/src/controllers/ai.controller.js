const aiService = require("../services/ai.service");

module.exports.getResponse = async(req, res) => {
    try {
        const prompt = req.query.prompt;

        // Validate prompt
        if(!prompt || prompt.trim() === ""){
            return res.status(400).json({ 
                error: "Prompt is required and cannot be empty" 
            });
        }

        // Call AI service
        const response = await aiService(prompt);
        
        // Send successful response
        res.status(200).json({ 
            success: true,
            response: response 
        });

    } catch (error) {
        console.error("Controller Error:", error.message);
        res.status(500).json({ 
            error: "Failed to generate AI response",
            details: error.message 
        });
    }
}