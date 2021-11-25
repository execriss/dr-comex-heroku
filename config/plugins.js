module.exports = ({ env }) => ({
    upload: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: AWS_ACCESS_KEY_ID='AKIAS7KRWSP4AG3WPQIN',
        secretAccessKey: AWS_ACCESS_SECRET='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',
        region: 'eu-west-3',
        params: {
          Bucket: 'cultivo-ecommerce',
        },
      },
    },
  });
   