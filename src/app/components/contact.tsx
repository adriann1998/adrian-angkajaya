import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Loader2, Send, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface Form {
  fullName: string;
  email: string;
  subject: string;
  msg: string;
}

const initialFormState: Form = {
  fullName: '',
  email: '',
  subject: '',
  msg: '',
};

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function Contact() {

  const [loading, setLoading] = useState<boolean>(false);
  const [submissionStatus, setSubmissionStatus] = useState<'success' | 'error' | null>(null);
  const [formValues, setFormValues] = useState<Form>(initialFormState);

  // TODO: MOVE THIS TO BACKEND
  const handleSubmitForm = async () => {
    setLoading(true);
    try {
      const options: RequestInit = {
        method: 'POST',
        body: JSON.stringify(formValues)
      };
      const response = await fetch('/api/submit-contact', options).then(data => data.json());
      return response?.data?.messageId
        ? setSubmissionStatus('success')
        : setSubmissionStatus('error');
    } catch (err) {
      console.log(err);
      setSubmissionStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const submitDisabled =
    formValues.fullName.length <= 3 ||
    emailRegex.test(formValues.email) === false ||
    formValues.msg.length === 0;

  return (
    <>
      {/* submission status dialogs */}
      <SubmissionStatus
        status={submissionStatus}
        onSuccess={() => {
          setSubmissionStatus(null);
          setFormValues(initialFormState);
        }}
        onError={() => {
          setSubmissionStatus(null);
        }}
      />

      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Let's Create Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Ready to bring your ideas to life? Let's discuss your project and create something amazing together.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
                <Mail
                  className="w-6 h-6"
                  onClick={() => window.open(`mailto:angkajaya98@gmail.com?subject=Exciting Full Stack Opportunity&body=Hey Adrian,`)}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p className="text-gray-300 text-lg">angkajaya98@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
                <Phone
                  className="w-6 h-6"
                  onClick={() => window.open('tel:0411180990')}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p className="text-gray-300 text-lg">+61 411 180 990</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center hover:cursor-pointer">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Location</h3>
                <p className="text-gray-300 text-lg">Melbourne, Australia</p>
              </div>
            </div>

            <div className="flex space-x-4 pt-8">
              <Button
                variant="default"
                size="icon"
                className="w-12 h-12 border-gray-600 hover:bg-gray-800/50 hover:border-purple-500 transition-all duration-300"
                asChild
              >
                <a
                  href={'https://github.com/adriann1998'}
                  target="_blank"
                >
                  <Github className="w-5 h-5 text-red cursor-pointer" />
                </a>
              </Button>
              <Button
                variant="default"
                size="icon"
                className="w-12 h-12 border-gray-600 hover:bg-gray-800/50 hover:border-purple-500 transition-all duration-300"
                asChild
              >
                <a
                  href={'https://www.linkedin.com/in/adrian-angkajaya-aa7641194/'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5 cursor-pointer" />
                </a>
              </Button>
            </div>
          </div>

          <Card className="bg-gray-800/30 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    name="full-name"
                    className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
                    value={formValues.fullName}
                    onChange={(e) => setFormValues(prev => ({ ...prev, fullName: e.target.value }))}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
                    value={formValues.email}
                    onChange={(e) => setFormValues(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
                <Input
                  placeholder="Subject"
                  className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors"
                  value={formValues.subject}
                  onChange={(e) => setFormValues(prev => ({ ...prev, subject: e.target.value }))}
                />
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-gray-900/50 text-white border-gray-600 focus:border-purple-500 transition-colors resize-none"
                  value={formValues.msg}
                  onChange={(e) => setFormValues(prev => ({ ...prev, msg: e.target.value }))}
                />
                <Button
                  onClick={e => {
                    e.preventDefault();
                    handleSubmitForm();
                  }}
                  disabled={submitDisabled}
                  className="w-full py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Contact;


const SubmissionStatus = ({
  status,
  onSuccess,
  onError,
}: {
  status: 'success' | 'error' | 'sending' | null;
  onSuccess: () => void;
  onError: () => void;
}) => {
  if (status === null) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div className="bg-gray-800 rounded-2xl p-8 max-w-md w-full mx-4 border border-gray-700">
        <div className="text-center">
          {status === 'sending' && (
            <div className="space-y-4">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Send className="w-8 h-8 text-white animate-pulse" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Sending Message...</h3>
                <p className="text-gray-300">Please wait while we deliver your message</p>
              </div>
            </div>
          )}

          {status === 'success' && (
            <div className="space-y-4">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center animate-bounce">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-green-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Message Sent!</h3>
                <p className="text-gray-300">Thanks for reaching out! I'll get back to you soon.</p>
              </div>
              <Button
                onClick={onSuccess}
                className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-2"
              >
                Send Another Message
              </Button>
            </div>
          )}

          {status === 'error' && (
            <div className="space-y-4">
              <div className="relative">
                <div className="w-20 h-20 mx-auto bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto border-4 border-red-400 rounded-full animate-ping opacity-30"></div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">Oops! Something went wrong</h3>
                <p className="text-gray-300">Failed to send your message. Please try again.</p>
              </div>
              <Button
                onClick={onError}
                className="mt-6 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-6 py-2"
              >
                Try Again
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};