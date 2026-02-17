/**
 * API Usage Examples
 * यह file examples के लिए है, actual components में इस्तेमाल करें
 */

import { useState, useEffect } from 'react';
import {
  // Auth services
  login,
  // register,
  // logout,
  sendOTP,
  loginWithOTP,
  // Product services
  getProducts,
  // getProduct,
  getFeaturedProducts,
  searchProducts,
  // getProductsByCategory,
  // Category services
  // getCategories,
  // getCategory,
  getTopLevelCategories,
  // getSubcategories,
  // Contact service
  submitContactForm,
  // Helpers
  formatProduct,
  formatCategory,
} from '../services';
import { useAuth } from '../hooks/useAuth';

// Example: Login Component
export const LoginExample = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await login({
        identifier: email,
        password,
      });
      console.log('Login successful:', response.user);
      // Redirect or update state
    } catch (err: any) {
      setError(err.error?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

// Example: Using Auth Hook
export const AuthExample = () => {
  const { user, isAuth, loginUser, logoutUser, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {isAuth ? (
        <div>
          <p>Welcome, {user?.username}!</p>
          <p>Email: {user?.email}</p>
          <button onClick={logoutUser}>Logout</button>
        </div>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

// Example: Products List Component
export const ProductsListExample = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getProducts({
          populate: '*',
          pagination: { page: 1, pageSize: 12 },
          sort: ['createdAt:desc'],
        });
        
        const formattedProducts = response.data.map(formatProduct);
        setProducts(formattedProducts);
      } catch (err: any) {
        setError(err.error?.message || 'Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {products.map((product) => (
          <div key={product.id}>
            {product.mainImage && (
              <img src={product.mainImage} alt={product.name} style={{ width: '100%' }} />
            )}
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            {product.inStock && <p>In Stock</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

// Example: Featured Products
export const FeaturedProductsExample = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await getFeaturedProducts(6);
        const formattedProducts = response.data.map(formatProduct);
        setProducts(formattedProducts);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeatured();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Featured Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.mainImage} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

// Example: Categories List
export const CategoriesListExample = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getTopLevelCategories({
          populate: ['image', 'products'],
        });
        const formattedCategories = response.data.map(formatCategory);
        setCategories(formattedCategories);
      } catch (err) {
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category.id}>
          {category.image && <img src={category.image} alt={category.name} />}
          <h3>{category.name}</h3>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

// Example: Search Products
export const SearchProductsExample = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    try {
      const response = await searchProducts(searchQuery, {
        inStock: true,
      });
      const formattedProducts = response.data.map(formatProduct);
      setResults(formattedProducts);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch(query);
          }
        }}
        placeholder="Search products..."
      />
      <button onClick={() => handleSearch(query)} disabled={loading}>
        Search
      </button>

      {loading && <p>Searching...</p>}
      
      <div>
        {results.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Example: Contact Form
export const ContactFormExample = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    subject: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      await submitContactForm(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '', phone: '', subject: '' });
    } catch (err: any) {
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="Email"
        required
      />
      <input
        type="tel"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Phone (optional)"
      />
      <input
        type="text"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        placeholder="Subject (optional)"
      />
      <textarea
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Message"
        required
      />
      {success && <p style={{ color: 'green' }}>Message sent successfully!</p>}
      <button type="submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

// Example: OTP Verification
export const OTPExample = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'send' | 'verify'>('send');
  const [loading, setLoading] = useState(false);

  const handleSendOTP = async () => {
    setLoading(true);
    try {
      await sendOTP({ phone });
      setStep('verify');
      alert('OTP sent to your phone!');
    } catch (err: any) {
      alert(err.error?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    try {
      await loginWithOTP({ phone, otp });
      alert('OTP verified successfully!');
      // Proceed with registration or login
    } catch (err: any) {
      alert(err.error?.message || 'Invalid OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {step === 'send' ? (
        <div>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
          <button onClick={handleSendOTP} disabled={loading}>
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </div>
      ) : (
        <div>
          <p>Enter OTP sent to {phone}</p>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
          />
          <button onClick={handleVerifyOTP} disabled={loading}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
          <button onClick={() => setStep('send')}>Back</button>
        </div>
      )}
    </div>
  );
};

