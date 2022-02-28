module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b9e67a947bc9df59ec74cb8b4de3d4f6'),
  },
});
